//grade A>79, B>60-79, C>59-49, D>40-49, E<40//
//prompt user to enter student grade//

const StudentGrade =console.log("Enter student grade");

//limit the data type to parse intergers only//
//The number must be between 0-100//

const StudentGradeInt = parseInt(StudentGrade);

if (StudentGrade>=0 && StudentGradeInt<=100) {
  //naming the function
  function gradingSystem(grade){
    if (grade>79) {
      return "A"

    }else if (grade>=60 && grade<=79) {
      return "B"

    }else if (grade>=50 && grade<=59) {
      return "C"

    } else if (grade>=40 && grade<=49) {
      return "D"

    } else(grade<40); {
      return "E"
    }
    
  }
}

