function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("started downloading from url");
    setTimeout(function processDownloading() {
      let data = "dummy data";
      console.log("downloading completed");
      resolve(data);
    }, 4000);
  });
}

function writefile(data) {
  console.log("start writing data", data);
  return new Promise(function (resolve, reject) {
    console.log("start writting", data, "in a file");
    setTimeout(function processWriting() {
      let filename = "result.txt";
      console.log("File written successfully");
      resolve(filename);
    }, 3000);
  });
}

function uploadData(file, url) {
  //   console.log("upload started");
  return new Promise(function (resolve, reject) {
    console.log("Upload started on url", url, "filename is ", file);
    setTimeout(function processUpload() {
      let result = "SUCCESS";
      console.log("Uploading done");
      resolve(result);
      //   resolve(12563); // this line not work only first resolve work after that multiple resolve don't work as promise only fullfilled once
    }, 5000);
  });
}

// let downloadPromise = fetchData("www.drive.com");
// downloadPromise.then(function processDownload(value) {
//     console.log(value);  // dummy data
//   console.log("Download promise fullfilled");
//   let writePromise = writefile(value);
//     writePromise.then(function processWrite(value) {
//     console.log("writing of filecompleted");
//     console.log(value);  // result.txt
//   });
// });

// let downloadpromise = fetchData("www.google.com");
// x = downloadpromise
// .then(function processDownload(value) {
//     console.log("downloading is done with", value);
//     // return "ritik"
// });

// x.then(function process(value){
//     console.log("x promise is ", value);
// })

// let downloadPromise = fetchData("www.googledrive.com");
// downloadPromise
//   // .then(function processDownload(value) {
//   //   console.log("downloading done with ", value);
//   //   return value;
//   // })
//   .then((value) => value)
//   // .then(function processWrite(value) {
//   //   console.log(value); // dummy data
//   //   return writefile(value);
//   // })
//   .then((value) => writefile(value))
//   // .then(  function(value) {
//   //   console.log(value); // result.txt
//   //   return uploadData(value, "www.google.com");
//   // })
//   .then((value) => uploadData(value, "www.drive.com"))
//   .then(function process() {
//     console.log("Done");
//   });

fetchData("www.google.com")
.then((value) => value)
.then((value) => writefile(value))
.then((value) => uploadData(value, "www.drive.com"))
.then(() => {console.log("done")});

// resolve() change the state from pending to fullfilled it is called after the second in setTimeout before state is pending and value is undefined
