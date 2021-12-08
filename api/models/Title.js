'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Title extends Model {}

  Title.init({
   Name: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 250],
        notEmpty: true,
      }
    },
    Author: {
        type: DataTypes.STRING,
      validate: {
        len: [2, 250],
        notEmpty: true,
      }
    }, 
    Volume : {
        type: DataTypes.INTEGER
    }, 
  }, {
    sequelize,
    modelName: 'Title'
  });

  Title.associate = (models) => {
    // associations can be defined here
    models.Title.belongsToMany(models.Library, {through: 'TitleInLibrary'});
  };

  return Title;
};