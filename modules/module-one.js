// calculate a random number based on min/max inputs
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

// make the randomNumber() function available
// to other parts of our application
// will be pulled into app.js
module.exports = randomNumber;
