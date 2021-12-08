'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Library extends Model {}

Library.init({
   Name: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 250],
        notEmpty: true,
      }
    },
    Address: {
        type: DataTypes.STRING,
      validate: {
        len: [2, 250],
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'Library'
  });

  Library.associate = (models) => {
    models.Library.belongsToMany(models.Title, {through: 'TitleInLibrary'});
  };

  return Library;
};