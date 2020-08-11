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

    function winfxn() {
        wins++; 
        $("#winstally").text(wins);
        alert("You win!");
        reset();
    }

    function lossesfxn() {
        losses++;
        $("#losstally").text(losses);
        alert("You lose! Play again!");
        reset();
    }

    $("#crystals1").on("click", function() {
        score = score + randomCrystal1;
        console.log("Current Score: " + score);
        $("#userTotal").text(score);
        if (score === randomGoal) {
            winfxn();
        }
        else if (score > randomGoal) {
            lossesfxn();
        }
        else {
            console.log("Keep going!");
        }
    });

    $("#crystals2").on("click", function() {
        score = score + randomCrystal2;
        console.log("Current Score: " + score);
        $("#userTotal").text(score);
        if (score === randomGoal) {
            winfxn();
        }
        else if (score > randomGoal) {
            lossesfxn();
        }
        else {
            console.log("Keep going!");
        }
    });

    $("#crystals3").on("click", function() {
        score = score + randomCrystal3;
        console.log("Current Score: " + score);
        $("#userTotal").text(score);
        if (score === randomGoal) {
            winfxn();
        }
        else if (score > randomGoal) {
            lossesfxn();
        }
        else {
            console.log("Keep going!");
        }
    });
    
    $("#crystals4").on("click", function() {
        score = score + randomCrystal4;
        console.log("Current Score: " + score);
        $("#userTotal").text(score);
        if (score === randomGoal) {
            winfxn();
        }
        else if (score > randomGoal) {
            lossesfxn();
        }
        else {
            console.log("Keep going!");
        }
    });

});