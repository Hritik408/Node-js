console.log("start of file");

setTimeout(function timer1() {
  console.log("timer 1 done");
}, 0);

for (let i = 0; i < 100000000; i++) {
  // some task
}

let x = Promise.resolve("hritik' promise");
x.then(function processPromise(value) {
  console.log("whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("timer 2 done");
}, 0);

console.log("end of file");
