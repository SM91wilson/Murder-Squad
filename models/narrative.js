module.exports = (sequelize, DataTypes) => {
    var Narrative = sequelize.define("Narrative", {
        narrative: DataTypes.TEXT
    },{timestamps: false});
    Narrative.associate = function(models) {
        Narrative.belongsTo(models.Story)
           };
    return Narrative;
}

