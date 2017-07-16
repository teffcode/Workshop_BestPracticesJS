
var coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

module.exports = {
  getAmount: function(coinType) {
    if(!coins.hasOwnProperty(coinType)){
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  }
};
