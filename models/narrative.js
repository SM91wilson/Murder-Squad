module.exports = (sequelize, DataTypes) => {
    var Narrative = sequelize.define("Narrative", {
        narrative: DataTypes.STRING
    },{timestamps: false});
    Narrative.associate = function(models) {
        Narrative.belongsTo(models.Story)
        // ,
        //     {
        //         foreignKey: {
        //           allowNull: false,
        //         },
        //       });
           };
    return Narrative;
}

