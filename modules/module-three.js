var randomNumber = require('./module-one.js');
var toUSD = require('./module-two.js');

var heading = "Account Balance: \n";
var accountBalance;
var rand = randomNumber(100, 1000000);
accountBalance = toUSD(rand);

module.exports = {
  accountBalance: accountBalance,
  heading: heading
};