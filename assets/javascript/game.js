var correctGuess = 0;
var wrongGuess = 0;
var lives = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = ""

function laugh(){
    var evilLaugh = document.getElementById('laugh');
    // evilLaugh.src = "../audio/evil-laugh.mp3";
    evilLaugh.play();
}

function random(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function reset(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    // console.log("new random number is "+randomLetter);
    lives = 9;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("misses").innerHTML = "";
}


random();
// console.log(randomLetter);

document.onkeyup = function(event){
    if (event.key==randomLetter){
        correctGuess++;
        document.getElementById("win").innerHTML = correctGuess;
        reset();
    }
    else{
        lives--;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("misses").append(event.key+", ");
        if(lives<1){
            wrongGuess++;
            document.getElementById("lose").innerHTML = wrongGuess;
            laugh();
            reset();
        }
    }
}