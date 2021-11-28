require('dotenv').config()

module.exports = {
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: 3306,
    define: {
        timestamps: true,
        paranoid: true,
        underscored: true
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
}