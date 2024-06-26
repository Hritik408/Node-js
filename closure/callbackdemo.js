function fun(x, fn) {
  // here fn consuming the callback
  // x -> number, fn -> callback function
  for (let i = 0; i < x; i++) {
    console.log(i);
  }
  fn(); // calling a callback passed
}

fun(10, function log() {
  // int, function expression(callback function)
  // this is the callback function
  console.log("custom logger");
});
