var randomNumber = require('./module-one.js');
var toUSD = require('./module-two.js');

var heading = "Account Balance: \n";
var rand = randomNumber(100, 1000000);
var balance = toUSD(rand);
// function accountBalance() {
//   var balance = toUSD(rand);
//   return balance;
// }

module.exports = {
  accountBalance: balance,
  heading: heading
};
