module.exports = (sequelize, DataTypes) => {
    var Guests = sequelize.define("Guests", {
        
        name: DataTypes.STRING
        
    },{timestamps: false});

    Guests.associate = function(models) {
        Guests.belongsTo(models.Role)

        Guests.hasOne(models.Story, {
            // foreignKey: {
            //   name: "murderer"
            // }
          });

        Guests.hasMany(models.Clues, 
            {foreignKey:
                {allowNull:false}
            } );
    };
    return Guests;
};
