'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      // User.belongsToMany(models.Field, {through: 'user_interests', foreignKey: 'field_id'})
    //  User.hasMany(models.UserCourse, { foreignKey: 'user_id', as: 'user_courses' })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  })
  return User
}