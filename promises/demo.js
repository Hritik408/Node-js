function fetchCustom(url, fn) {
  // download content of url, this downloading takes some times, we will download the content from the url and whatever the result call
  // to as callback
  console.log("downloding the data from", url);
  setTimeout(function process() {
    console.log("downloading completed");
    let response = "dummy data";
    //  return response;
    fn(response);
    // console.log("Ending the function");
  }, 3000);
}

function writeFile(data, fn) {
  // this function write the data into new file
  console.log("start writing data", data);
  setTimeout(function process() {
    console.log("writing completed");
    let filename = "file.txt";
    fn(filename);
    // console.log("writing completed");
  }, 4000);
}

function uploadFile(file, url, fn) {
  console.log("upload started");
  setTimeout(function process() {
    console.log("File", file, "uploaded successfully on", url);
    let uploadResponse = "SUCCESS";
    fn(uploadResponse);
    // console.log("upload ended");
  }, 2000);
}

fetchCustom("www.google.com", function downloadCallback(response) {   // callback hell
  console.log("Download response is", response);
  writeFile(response, function writeFileCallback(filenameResponse) {
    console.log("new file written is ", filenameResponse);
    uploadFile(
      filenameResponse,
      "www.drive.com",
      function uploadCallback(uploadResponse) {
        console.log("Upload success", uploadResponse);
      }
    );
  });
});
