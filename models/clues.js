module.exports = (sequelize, DataTypes) => {
  var Clues = sequelize.define("Clues", {
    clues: DataTypes.STRING,
  },{timestamps: false});

  Clues.associate = function(models) {
    Clues.belongsTo(models.Guests);
};
    
  
  return Clues;
};
