module.exports = (sequelize, DataTypes) => {
    var Guests = sequelize.define("Guests", {
        name: DataTypes.STRING,
        role: DataTypes.STRING,
        murderer: DataTypes.STRING
    });
    return Guests;
};