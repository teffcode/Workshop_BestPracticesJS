
var productInventory = require('./productInventory');

module.exports = {

    getProducts: function() {
      return products;
    },

    getProduct: function(productId) {
      var product = products.find(function(p) { return p.id === productId; });
      return product;
    },

    vendProduct: function(productId){
      var product = this.getProduct(productId);
      this.decreaseBalance(product.price);
      return product;
    }
};
