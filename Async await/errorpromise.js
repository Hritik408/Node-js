function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("started downloading from url", url);
      setTimeout(function processDownloading() {
        let data = "dummy data";
        console.log("downloading completed");
       if(typeof data === "undefined") reject(data);
       else resolve(data);
      }, 2000);
    });
  }

let x = fetchData("www.youtube.com");
x.then(function success(value) {
    console.log("value is", value)
}, function err(err) {
    console.log("error is", err)
})  