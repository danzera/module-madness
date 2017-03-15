function toUSD(someNumber) {
  var numString = someNumber.toString();
  var usd = '$';

  if (numString.length < 4) {
    usd += numString;
  } else if (numString.length < 7) {
    usd += numString.substring(0, 3) + ',' + numString.substring(3);
  } else {
    usd += numString.substring(0, 1) + ',' + numString.substring(1, 4) + ',' + numString.substring(4);
  }

  return usd;
}

module.exports = toUSD;

/* PARTIALLY COMPLETED ATTEMPT AT RECURSIVE SOLUTION - logic needs some tweaking

var usd = '$';

function toUSD(someNumber) {
  if (someNumber < 1000) {
    usd += someNumber;
    return usd;
  } else if (someNumber < 1000000) {
    usd += parseInt(someNumber / 1000) + ",";
    var next = someNumber - parseInt(someNumber / 1000) * 1000;
    toUSD(next);
  } else {
    usd += parseInt(someNumber / 1000000) + ",";
    toUSD(someNumber % 1000000);
  }
}

function startConversion(someNumber) {
  usd = '$';
  return toUSD(someNumber);
}


module.exports = startConversion;

*/
