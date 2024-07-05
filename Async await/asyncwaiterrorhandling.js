function fetchData(url) {
    return new Promise(function (resolve, reject) {
      console.log("started downloading from url", url);
      setTimeout(function processDownloading() {
        let data = "dummy data";
        // console.log("downloading completed");
        reject(data);
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
        let result = "SUCCESS ";
        console.log("Uploading done");
        resolve(result);
      }, 5000);
    });
  } 


  async function proccessing () {
    try {
        let downloadedData =  await fetchData("www.google.com");
        let file = await writefile(downloadedData);
        let uploadResponse = await uploadData(file, "www.yahoo.com");
        return uploadResponse;
    } catch (error) {
        console.log("Error is", error)
    }
  }

  proccessing();