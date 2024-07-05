function dummyPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Timer's promise");
    }, 10000);
  });
}

console.log("start of file");

setTimeout(function timer1() {
  console.log("timer 1 done");
  //   let y = dummyPromise();
  let y = Promise.resolve("immediately promise");
  y.then(function promiseY(value) {
    console.log("whose promise ? ", value);
  });
}, 0);

let x = Promise.resolve("hritik' promise");
x.then(function processPromise(value) {
  console.log("whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("timer 2 done");
}, 0);

console.log("end of file");
