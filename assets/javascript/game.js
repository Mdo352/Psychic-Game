var correctGuess = 0;
var wrongGuess = 0;
var lives = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = ""

function random(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function reset(){
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("afrer reset new rano is "+randomLetter);
    lives = 9;
    document.getElementById("lives").innerHTML = lives;
    document.getElementById("misses").innerHTML = "";
}


random();
console.log(randomLetter);

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
            reset();
        }
    }

}



// if (true){
//     random();
//     console.log(randomLetter);
//         if(lives = 0 ){
//             wrongGuess ++;
//             document.getElementById("lose") = wrongGuess;
//         }
//     }

// }

    // for(lives; lives >= 1; lives--){
    //     // random();
    //     document.onkeyup = function(event){
    //         console.log("with " +lives+ " lives left, the random letter is "+ randomLetter);
    //         if (event.key == randomLetter){
    //             alert('correct')
    //             document.getElementById("lives").innerHTML=(lives);
    //         }
    //     }}
    
        //     var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        //         }else{
        //             document.getElementById("misses").append(event.key+", ");
        //             lives--;
        // wrongGuess++;
        // document.getElementById("lose").innerHTML= wrongGuess;