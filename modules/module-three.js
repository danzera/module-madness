var randomNumber = require('./module-one.js');
var toUSD = require('./module-two.js');

function calcUSD(min, max) {
  var rand = randomNumber(min, max);
  console.log(rand);
  var balance = toUSD(rand);
  console.log(balance);
  return balance;
}

function heading() {
  return "Account Balance:\n";
}

module.exports = {
  calcUSD: calcUSD,
  heading: heading
};
