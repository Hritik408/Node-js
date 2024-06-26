function process() {
  console.log("start");
  setTimeout(function exe() {
    console.log("execute task");
  }, 1000);
  for (let i = 0; i < 10000000; i++) {
    // some task
  }
  console.log("end");
}

process();
console.log("global execution");
