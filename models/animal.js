module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      typePet: DataTypes.STRING,
      breedPet: DataTypes.STRING,
      namePet: DataTypes.STRING, 
      genderPet: DataTypes.STRING,
    });
    return Pet;
  };
  