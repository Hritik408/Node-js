let id1 = setTimeout(function execute() {
  console.log("do task 1");
}, 5000);

let id2 = setTimeout(function execute() {
  console.log("do task 2");
  // clearInterval(id1);  // if we use this then id1 will not execute
}, 2000);
