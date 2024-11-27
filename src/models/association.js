const Product = require('./product');
const Category = require('./category');

Product.belongsTo(Category);
Category.hasMany(Product,{foreignKey:'categoryId'});


module.exports = {
    Product,Category
}
