// Get references to page elements
var $typePet = $("#typePet");
var $typeBreed = $("#typeBreed");
var $petName = $("#petName");
var $petGender = $("#petGender");
 
// The API object contains methods for each kind of request we'll make
var API = {
  savePet: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/pet",
      data: JSON.stringify(example)
    });
  },
  getPet: function() {
    return $.ajax({
      url: "api/pet",
      type: "GET"
    });
  },
  deletePet: function(id) {
    return $.ajax({
      url: "api/pet/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshPet = function() {
  API.getPet().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var pet = {
    typePet: $typePet.val().trim(),
    typeBreed: $typeBreed.val().trim(),
    petName: $petName.val().trim(),
    petGender: $petGender.val().trim(),
  };

  // if (!(animal.typePet && animal.typeBreed && animal.petName && animal.petGender)) {
  //   alert("You must enter an example text and description!");
  //   return;
  // }

  API.savePet(pet).then(function() {
    refreshExamples();
  });

  $typePet.val("");
  $typeBreed.val("");
  $petName.val("");
  $petGender.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletePet(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$('#submitBtn').on("click", handleFormSubmit);
//$('exampleList').on("click", ".delete", handleDeleteBtnClick);
