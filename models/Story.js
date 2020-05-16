module.exports = (sequelize, DataTypes) => {
    var Story = sequelize.define("Story", {
       Stories: DataTypes.STRING,
    },{timestamps: false});

    Story.associate = function(models) {
        Story.belongsTo(models.Guests)
      
        Story.hasMany(models.Narrative,
          {
              foreignKey: {
                allowNull: false,
              },
            });
      };

    return Story;
}

