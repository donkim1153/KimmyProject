var location1 = 2;
var location2 = 3;
var location3 = 4;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false; 

while (isSunk == false) {
    guess = prompt("Ready, Aim, FIRE! (Enter a number from 0-6)");
    if (guess < 0 || guess > 6) {
        alert("Enter a number from 0 - 6");
    } else {
        guesses = guesses + 1; 

        if (guess == location1 || location2 || location3) {
            alert = ("HIT!");
            hits = hits + 1;
            
            if (hit = 3){
                alert = ("You sank my battleship!");
            }

        } else {
            alert = ("Miss!");
        }
    }

}
var stats = "You took" + guesses + " gusses to sink the battleship," + "which means your shooting accuracy was " + (3/guesses);

alert(stats);
