
var balanceManager = require('./balanceManager');

var balance = 0;

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {

  decreaseBalance: function(amount){
    // This method decreases the balance of the vending machine. If the balance amount is not
    // enough to cover the purchase, the method throws an error.
    var errorMessage;
    if(!this.canAfford(amount)){
        errorMessage = 'Insufficient balance';
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    balance -= amount;
  },

  getBalance: function(){
    return balance;
  },


  increaseBalance: function(amount){
    balance += amount;
  },

  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },
  
  releaseChange: function(){
    var currentBalance = this.getBalance();
    this.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  },


};
