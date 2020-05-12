module.exports = (sequelize, DataTypes) => {
    var Clues = sequelize.define("Clues", {
        character1clues: DataTypes.STRING,
        character2clues: DataTypes.STRING,
        character3clues: DataTypes.STRING,
        narrative1: DataTypes.STRING,
        narrative2: DataTypes.STRING,
        narrative3: DataTypes.STRING
    });
    return Clues;
}



// narrative: [
//             {
//                 narrativeText:DataTypes.STRING,
//                 narrativeId:DataTypes.INT
//             }
//         ],