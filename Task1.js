const chalk = require("chalk")
var input=require("readline-sync");
var score = 0;
var Name=input.question("what is your name? ");
console.log(chalk.blue("welcome " + Name ))
console.log("Let's see",Name,"how you know about GK")
function play(question,answer){
  var Name=input.question(chalk.green(question));
  if(Name===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong!")
  }
console.log("current score",score);
console.log("*****************")
}


var questions=[{
  question:"Who was the first President of India? ",
  answer:" Dr. Rajendra Prasad ?"
},{
  question:"Who is known as Father of Indian Constitution? ",
  answer:"Dr. B. R. Ambedkar"
},{
  question:"Brain of computer is?? ",
  answer:"CPU"
},{
  question:"Which is the longest river on the earth ",
  answer:"Nile"
},{
  question:" Highest dam of India is?",
  answer:"Tehri Dam"
},{
  question:"We get solar energy from?",
  answer:"Sun"
}];
for(var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("yeah!! your total score is: ",score)
