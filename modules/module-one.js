// calculate a random number based on min/max inputs
function randomNumber(min, max) {
    var rando = Math.floor(Math.random() * (1 + max - min) + min);
    //console.log('rando calculator: ' + rando);
    return rando;
}

// make the randomNumber() function available
// to other parts of our application
// will be pulled into app.js via module-three
module.exports = randomNumber;
