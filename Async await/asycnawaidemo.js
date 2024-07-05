function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("started downloading from url", url);
    setTimeout(function processDownloading() {
      let data = "dummy data";
      // console.log("downloading completed");
      resolve(data);
    }, 4000);
  });
}

async function processing() {
  console.log("Enter processing");
  let value1 = await fetchData("www.google.com");
  console.log("google downloading done");
  let value2 = await fetchData("www.youtube.com");
  console.log("youtube downloading done");
  console.log("exiting processing");  

  return value1 + value2;
}

console.log("Start");

setTimeout(function timer1() {
  console.log("timer 1");
}, 0);
console.log("after setting timer 1");

let x = processing();
x.then(function (value) {
  console.log("finally proccessing promise resolve with ", value);
});

setTimeout(function timer2() {
  console.log("timer 2");
}, 1000);

setTimeout(function timer3() {
  console.log("timer 3");
}, 0);

console.log("end");
