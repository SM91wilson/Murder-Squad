module.exports = (sequelize, DataTypes) => {
    var Story = sequelize.define("Story", {
       Stories: DataTypes.STRING,
    });
    return Story;
}