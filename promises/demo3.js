function fetchData(url) {
    return new Promise(function (resolve, reject){
        console.log("going to start the download");
        setTimeout(function process () {
            let data = "Dummy data downloaded";
            console.log("downloading completed");
            resolve(data);  // calling the resolve fun means promise is fullfilled
        }, 10000);
        console.log("Timer to mimic download started");
    })
}

console.log("starting the program");
console.log("we are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log("New promise object created successfully, but downloading still going on");