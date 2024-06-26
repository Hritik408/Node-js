function todo(task) {
  console.log("starting  todo");
  setTimeout(function fun() {
    console.log("completed ", task);
  }, 5000);
  // task = "danyavad";
  console.log("end of todo");
}

console.log("starting");
todo("assignment");
console.log("Ending");
