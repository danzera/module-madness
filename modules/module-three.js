var randomNumber = require('./module-one.js');
var toUSD = require('./module-two.js');

var heading = "Account Balance: \n";
var rand = randomNumber(100, 1000000);
console.log('module-3 balance: ' + toUSD(randomNumber(100, 1000000)));
// function accountBalance() {
//   var balance = toUSD(rand);
//   return balance;
// }
module.exports = {
  accountBalance: 'hi',
  heading: heading
};
