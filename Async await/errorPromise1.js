function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("started downloading from url", url);
      setTimeout(function processDownloading() {
        let data = undefined;
        // console.log("downloading completed");
       if(typeof data == "undefined") reject(data);
       else resolve(data);
      }, 3000);
    });
  }

let x = fetchData("www.yahoo.com");
x.then(function success(value) {
    console.log("value is", value);
    return 10;
})
.then(function success1(val) {
    console.log("value is the", val);
    throw {error : "new error"}
})
.catch(function error(err){
    console.log("error is", err);
})
.finally(() => {   // finally() executed everytime
    console.log("Experiment completed")
})
