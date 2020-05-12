module.exports = (sequelize, DataTypes) => {
    var Suspects = sequelize.define("Suspects", {
        name: DataTypes.STRING,
    });
    return Suspects;
};