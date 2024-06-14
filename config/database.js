const { Sequelize } = require('sequelize')

const env = process.env.NODE_ENV || "development"
const config = require('../config/config')

const sequelize = new Sequelize(config[env])

console.log('Database is ready')

module.exports = sequelize;