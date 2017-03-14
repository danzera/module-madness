var usd = '$';

function toUSD(someNumber) {
  if (someNumber < 1000) {
    console.log(usd + someNumber);
    return usd + someNumber;
  } else if (someNumber < 1000000) {
    usd += parseInt(someNumber / 1000) + ",";
    toUSD(someNumber % 1000);
  } else {
    usd += parseInt(someNumber / 1000000) + ",";
    toUSD(someNumber % 1000000);
  }
}

module.exports = toUSD;
