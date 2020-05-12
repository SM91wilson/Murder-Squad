module.exports = (sequelize, DataTypes) => {
    var Notes = sequelize.define("Notes", {
        note: DataTypes.STRING
    });
    return Notes;
}