const Sequelize = require('sequelize');
const db = require('../config/db_config');
const Category = require('./category');



const Product = db.define('product', {
    title: {
        title: Sequelize.STRING,
        allowNull: false,
       
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoryId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        refernces :{
            model :'categories',
            key :'id'
        }
    }
});

module.exports = Product;

