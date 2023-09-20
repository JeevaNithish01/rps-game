var user = document.getElementById("inp");
var c;
//Enter 1 for Rock, 2 for Paper, 3 for Scissor
function randomNumber(){
c = (Math.round(Math.random() *2)+1);
    
  return c;
}
 
var c_score = 0;
var p_score = 0;

// while(p_score < 5 && c_score < 5){
function userInput(){
  if (p_score<5 && c_score<5) {
    if(inp.value == 1 && randomNumber() == 1){
      console.log("This round is a draw, computer chose the same.");
    }
    else if(inp.value == 2 && randomNumber() == 2){
      console.log("This round is a draw, computer chose the same.");
    }
    else if(inp.value == 3 && randomNumber() == 3){
      console.log("This round is a draw, computer chose the same.");
    }
    else if((inp.value == 1) && (randomNumber() == 2)){
      console.log("Computer chose Paper and computer won this round :(.");
      c_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
     else if((inp.value == 1) && (randomNumber() == 3)) {
      console.log("Computer chose Scissor and you won this round :).");
      p_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
  
    else if((inp.value == 2) && (randomNumber() == 1)) {
      console.log("Computer chose Rock and you won this round :).");
      p_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
    else if((inp.value == 2) && (randomNumber() == 3)){
      console.log("Computer chose Scissor and computer won this round :(.");
      c_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
  
    else if((inp.value == 3) && (randomNumber() == 1)) {
      console.log("Computer chose Rock and computer won this round :(.");
      c_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
    else if((inp.value == 3) && (randomNumber() == 2)) {
      console.log("Computer chose Paper and you won this round :).");
      p_score++;
      console.log(`computer : ${c_score}, player : ${p_score}`);
    }
  }
  else{
    console.log(`Game over, computer : ${c_score}, player : ${p_score}`)
  }
  // else{
  //   console.log("Enter a valid input");
  // }
}
// }
