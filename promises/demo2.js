// here write a function to download some data from url, without taking a callback
// instead use promises

function fetchData(url) {
    return new Promise(function(resolve, reject){  // promise constructor take callback as argument
        console.log("start fecting from ", url);
        setTimeout(function process () {
            let data = "Dummy data";
            console.log("Completed fetching the data");
            resolve(data); // return some data on success
        }, 4000)
    })
}

fetchData("www.google.com");