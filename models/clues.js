module.exports = (sequelize, DataTypes) => {
  var Clues = sequelize.define("Clues", {
    clues: DataTypes.TEXT
    
  },{timestamps: false});

  Clues.associate = function(models) {
    Clues.belongsTo(models.Guests);
};
    
  
  return Clues;
};
