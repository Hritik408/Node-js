function fun() {
  console.log("fun called");
  setTimeout(function exe() {
    console.log("inside 7sec timeout");
  }, 7000);
  setTimeout(function process() {
    console.log("inside 5sec timeout");
  }, 3000);
}
fun();
for (let i = 0; i < 10000000000; i++) {
  // execute some task
}
setTimeout(function last() {
  console.log("last timeout 7 sec");
}, 0);
