const Sequelize = require('sequelize');
const db = require('../config/db_config');
const {SALT_ROUNDS} = require('../config/serverConfig');

const bcrypt = require('bcrypt');


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
},{
    hooks : {
        beforeCreate : function(user){
            const salt = bcrypt.genSaltSync(+SALT_ROUNDS)
            user.password = bcrypt.hashSync(user.password,salt);
        }
    }
}
);

module.exports = User;

