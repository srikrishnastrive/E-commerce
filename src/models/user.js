const Sequelize = require('sequelize');
const db = require('../config/db_config');



const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        },
        
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        vaidate:{
            len:[3,30],
            isAlphanumeric : true
        }
        
    }
});

module.exports = User;

