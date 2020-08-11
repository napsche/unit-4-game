$(document).ready(function () {
    //Create variable to hold the random number to be guessed
    var randomGoal = Math.floor(Math.random() * 101) + 19;
    //get that number to appear in html
    $("#randomgoal").text(randomGoal);
    console.log(randomGoal);

    //create variable that will hold the random number assigned to crystal
    var randomCrystal1 = Math.floor(Math.random() * 12) + 1;
    var randomCrystal2 = Math.floor(Math.random() * 12) + 1;
    var randomCrystal3 = Math.floor(Math.random() * 12) + 1;
    var randomCrystal4 = Math.floor(Math.random() * 12) + 1;

    //click crystal, add value to score
    var wins = 0;
    var losses = 0;
    var score = 0;

    $("#winstally").text(wins);
    $("#losstally").text(losses);

    //function to reset the game
    function reset() {
        randomGoal = Math.floor(Math.random() * 101) + 19;
        $("#randomgoal").text(randomGoal);
        console.log(randomGoal);
        randomCrystal1 = Math.floor(Math.random() * 12) + 1;
        randomCrystal2 = Math.floor(Math.random() * 12) + 1;
        randomCrystal3 = Math.floor(Math.random() * 12) + 1;
        randomCrystal4 = Math.floor(Math.random() * 12) + 1;
        score = 0;
        $("userTotal").text(score);
    }

    function win() {
        wins++; 
        $("#winstally").text(wins);
        alert("You win!");
        reset();
    }

    function losses() {
        losses++;
        $("#losstally").text(losses);
        reset();
    }
    
    $("#crystals1").click(() => {
        score = score + randomCrystals1;
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
        score = score + randomCrystals2;
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
        score = score + randomCrystals3;
        $("#score").text(score);
        if (score === randomNumber) {
            win();
            reset(); reset2();
        }
        else if (score > randomNumber) {
            losses();
            reset();
            reset2();
        }
    });
    $("#crystals4").click(() => {
        score = score + randomCrystals4;
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
        randomNumber = Math.floor(Math.random() * (101 + 1) + 19);
        $("#random-number").html(randomNumber);
        randomCrystals1 = Math.floor(Math.random() * 12) + 1;
        randomCrystals2 = Math.floor(Math.random() * 12) + 1;
        randomCrystals3 = Math.floor(Math.random() * 12) + 1;
        randomCrystals4 = Math.floor(Math.random() * 12) + 1;
    }


    // //define variables for game
    // var winCount = 0;
    // var lossCount = 0;
    // var guessRemain = 10; 
    // var guessedLetters = [];

    // //set up array for computer choices
    // var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // //have computer pick random letter
    // var randomLetter = Math.floor(Math.random() * alphabet.length);
    // var computerChoice = alphabet[randomLetter];
    // console.log(computerChoice)

    // //make event for when key is pressed
    // document.onkeyup = function(event) {
    //     var userChoice = event.key; 
    //     //userChoice must be letter A-Z
    //     var input = /[a-z]/gi; 
    //         if (!input.test(userChoice)) {
    //             alert("Please choose a letter!");
    //         }
    //         else {
    //             console.log(userChoice);
    //         }

    //     //computer will choose new letter if user loses
    //     if (guessRemain <= 0) {
    //         lossCount++;
    //         document.getElementById("lossCount").innerHTML = lossCount++;
    //         console.log("You lost!");
    //         alert("You lost!");
    //         guessRemain = 10;
    //         guessedLetters = [];
    //         document.getElementById("guessedLetters").innerHTML = guessedLetters;
    //         document.getElementById("guessRemain").innerHTML = 10;
    //         randomLetter = Math.floor(Math.random() * alphabet.length);
    //         computerChoice = alphabet[randomLetter];
    //         console.log(computerChoice);
    //     }

    //     //compare computer and user choice
    //     else if (computerChoice === userChoice) {
    //         winCount++;
    //         console.log("You win!");
    //         alert("You win!");
    //         document.getElementById("winCount").innerHTML = winCount++;
    //         guessedLetters = [];
    //         document.getElementById("guessedLetters").innerHTML = guessedLetters;
    //         randomLetter = Math.floor(Math.random() * alphabet.length);
    //         computerChoice = alphabet[randomLetter];
    //         console.log(computerChoice);
    //         guessRemain = 10; 
    //         document.getElementById("guessRemain").innerHTML = 10;
    //     }
    //     else {
    //         console.log("Guess again!");
    //         document.getElementById("guessRemain").innerHTML = guessRemain--;
    //         guessedLetters.push(userChoice);
    //         document.getElementById("guessedLetters").innerHTML = guessedLetters;
    //     }


    // }

});