function submitData() {
    let min = guessForm.min.value;
    let max = guessForm.max.value;
        if (min == "" || max == "") {
            updateDOM("Please enter a valid number.", 'red');
            return false;
        } 
        else if (min <= 0 || max >= 100 ) {
            updateDOM("Please enter no less than 1 (Bottom Range) and no greater than 100 (Top Range)." , 'red');
            return false;
        }  
        if (min > max) {
            updateDOM("Please enter a number greater than 1 and less than 100.", 'red');
            return false;
        } 
        numberGuessGame(min, max);
        return false;  
}
function updateDOM(value, color) {
    document. getElementById("output").innerHTML = value;
    document. getElementById("output").style.color = color;
}
function numberGuessGame(min, max) {
   
    let no_of_guesses = 0;
    let num = Math.ceil(randomNumber (min, max));
    let guess;
    
    let message =  
    "Guess the number! Enter a number between " + min + 
    " and " + max + " to see if you can guess the correct one.";
    console.log(num)
    do{
        if (guess < num) {
            message = "Your guess is too low.";
        }
        if (guess > num) {
            message = "Your number is too high!"
        }
        no_of_guesses++;
        guess = parseInt(prompt(message))
    } while (guess !== num) 
    message = "Great Job! You guessed it! You guessed it in " +
    no_of_guesses + " guesses!";

    updateDOM(message, "green")
}
function randomNumber (min, max) {
    return Math.random() * (max - min) + min;
}