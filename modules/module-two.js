function toUSD(someNumber) {
  var numString = someNumber.toString();
  var usd = '$';

  if (numString.length < 4) {
    usd += numString;
  } else if (numString.length < 7) {
    usd += numString.substring(0, numString.length - 3) + ',' +
           numString.substring(numString.length - 3);
  } else if (numString.length < 10 ){
    usd += numString.substring(0, numString.length - 6) + ',' +
           numString.substring(numString.length - 6, numString.length - 3) + ',' +
           numString.substring(numString.length - 3);
  }
  console.log('mod2: ' + usd);
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
