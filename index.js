//Prompt the user to enter the student's mark
const mark=prompt("Please enter the student's mark(between 0 and 100):");

//validate the users input
if (mark<0||mark>100) {
  console.log("Invalid mark. Please enter a mark between 0 and 100.");
} else{
  //calculate the grade based on the mark
  let grade;
  if (mark>79) {
    grade="A";
  }
  else if(mark>=60){
    grade="B";
  }
  else if (mark>=50) {
    grade="C";
  }
  else if (mark>=40) {
    grade="D";
  }
  else{
    grade="E"
  }  
  console.log(`The studet\'s grade is:${grade}`);
}

