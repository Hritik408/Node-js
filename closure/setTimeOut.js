// setTimeout(() => {
//     console.log("hritik");
// }, 1000);

// setTimeout(function execute(){
//     console.log("chaudhary");
// }, 1000)

// setTimeOut returns a unique id
// read -> clearTimeout

let x = setInterval(() => {
  console.log("hritik ki jai ho");
}, 1000);

setTimeout(() => {
  clearInterval(x);
}, 10000);
