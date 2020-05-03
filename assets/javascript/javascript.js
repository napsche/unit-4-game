//Create variable to hold the random number to be guessed
var randomNumber = Math.floor(Math.random() * 101) + 19;
//get that number to appear in html
$("#random-number").html(randomNumber);
console.log(randomNumber);

//create variable to hold the different number options each crystal can hold
// var numberOptions = [1, 5, 7, 12];
//create for loop to give crystals number options
// for (var i=0; i<numberOptions.length; i++) {
//     console.log(numberOptions[i]);
//make image for iteration
//     var imageCrystal1 = $("<img>");
//     imageCrystal1.addClass("crystal");
//     imageCrystal1.attr("src", "assets/images/crystals1.jpg");
//     imageCrystal1.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals1").append(imageCrystal1);

// }
//create variable that will hold the random number assigned to crystal
var randomCrystal1 = Math.floor(Math.random() * 12) + 1;
var randomCrystal2 = Math.floor(Math.random() * 12) + 1; 
var randomCrystal3 = Math.floor(Math.random() * 12) + 1; 
var randomCrystal4 = Math.floor(Math.random() * 12) + 1; 

//click crystal, add value to score
var wins = 0; 
var losses = 0;
var score = 0;
$("#score").html(score);

function win() {
    wins = wins + 1; 
    $("#wins").text(wins);
    reset();
    reset2();
}
function losses() {
    losses = losses + 1;
    $("#losses").text(losses);
    reset();
    reset2();
}
$("#crystals1").click(() => {
    score = score + crystals1;
    $("#score").text(score);
    if (score === randomNumber) {
        win();
        reset();
        reset2();
    }
    else if (score > randomNumber) {
        losses();
        reset();
        reset2();
    }
});
$("#crystals2").click(() => {
    score = score + crystals2;
    $("#score").text(score);
    if (score === randomNumber) {
        win();
        reset();
        reset2();
    }
    else if (score > randomNumber) {
        losses();
        reset();
        reset2();
    }
});
$("#crystals3").click(() => {
    score = score + crystals3;
    $("#score").text(score);
    if (score === randomNumber) {
        win();
        reset();reset2();
    }
    else if (score > randomNumber) {
        losses();
        reset();
        reset2();
    }
});
$("#crystals4").click(() => {
    score = score + crystals4;
    $("#score").text(score);
    if (score === randomNumber) {
        win();
        reset();
        reset2();
    }
    else if (score > randomNumber) {
        losses();
        reset();
        reset2();
    }
});
function reset() {
    score = 0;
    $("#score").text(score);

}
function reset2() {
    randomNumber = Math.floor(Math.random() * (101 + 1) +19);
    $("#random-number").html(randomNumber);
    crystals1 = Math.floor(Math.random() * 12) + 1;
    crystals2 = Math.floor(Math.random() * 12) + 1;
    crystals3 = Math.floor(Math.random() * 12) + 1;
    crystals4 = Math.floor(Math.random() * 12) + 1;
}