const Product = require('./product');
const Category = require('./category');
const User = require('./user');

Product.belongsTo(Category);
Category.hasMany(Product,{foreignKey:'categoryId'});


module.exports = {
    Product,Category,User
}
