var teacher = "sanket";  // global

function fun(){   // state of fun
      var teacher = "pulkit";  // here teacher is used as target refrence
      console.log(teacher, teachingAssistant);   // pulkit, here techingAssitant used as source refrence, this is the case in which techingAssitance 'undeclared'
      teachingAssistant = "santanu"; // eligible to becoming  autoglobal 
}
 
function gun(){  // state of gun
    console.log(subject);  // undefined because in pausing phase subject is allocate to gun but value is not allocate to the subject at pausing phase
    var subject = "js";  // formal declaration as var is present
    console.log(teacher);
}   

console.log(teacher);
gun();
// fun();

// pharsing and execution