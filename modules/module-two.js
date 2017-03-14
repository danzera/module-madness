var usd = '$';

function toUSD(someNumber) {
  if (someNumber < 1000) {
    return usd + someNumber;
  } else if (someNumber < 1000000) {
    usd += (someNumber / 1000) + ",";
    toUSD(someNumber % 1000);
  } else {
    usd += (someNumber / 1000000) + ",";
    toUSD(someNumber % 1000000);
  }
}

module.exports = toUSD;
