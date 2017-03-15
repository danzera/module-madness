var randomNumber = require('./module-one.js');
var toUSD = require('./module-two.js');

var min = 100;
var max = 1000000;

function calcUSD() {
  var rand = randomNumber(min, max);
  var balance = toUSD(rand);
  return balance;
}

function heading() {
  return "Account Balance:\n";
}

module.exports = {
  calcUSD: calcUSD,
  heading: heading
};
