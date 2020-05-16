module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define("Role", {
    role: DataTypes.STRING,
  },{timestamps: false});

  Role.associate = function(models) {
      Role.hasOne(models.Guests, {
        foreignKey: {   
        allowNull: false
        }})
  };

  return Role;
};
