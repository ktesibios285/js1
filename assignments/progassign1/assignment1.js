const answer = document. querySelector ("p");
answer.addEventListener ("click", updateName);
function updateName () {
    let person = prompt("Please enter your name", "First and Last");

    if (person != null) {
    document.getElementById("answer").innerHTML =
    "Hello " + person + "! ";
    }
    
}
const answer2 = document. querySelector ("p");
answer2.addEventListener ("click", myQuestion);
function myQuestion() {
  let text;
  let yourDay = prompt("How is your day?");
  switch(yourDay) {
    case "Good", "good":
      text = "Great to hear your day is going well!";
      break;
    case "Bad", "bad":
      text = "Sorry to hear that. Try listenting to some upbeat music!";
      break;
    case "Ok", "ok", "So so", "so so":
      text = "Really? Maybe calling a friend would help.";
      break;
    default:
      text = "Not sure what you mean. Could you refresh your browser and use one of the three answers I recognise? Good, Bad or Ok?";
  }
  document.getElementById("answer2").innerHTML = text;
}
