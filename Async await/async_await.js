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

  // async function processing() {
  //   let downloadedData = await fetchData("www.google.com");
  //   // console.log("downloading await completed", downloadedData);
  //   let file = await writefile(downloadedData);
  //   // console.log("writting await completed", file);
  //   let uploadResponse = await uploadData(file, "drive.com")
  //   // console.log("uploading await completed");
  //   // console.log("Completed process with response: ", uploadResponse);
  //   let downloadedData1 = await fetchData("www.google.com");
  //   let file1 = await writefile(downloadedData);
  //   let uploadResponse1 = await uploadData(file1, "drive.com")
  //   let downloadedData2 = await fetchData("www.google.com");
  //   let file2 = await writefile(downloadedData);
  //   let uploadResponse2 = await uploadData(file2, "drive.com");

  //   return uploadResponse + uploadResponse1 + uploadResponse2;

  //   // return true;
  // }

  async function process1 (){
    let downloadedData = await fetchData("www.google.com");
    let file = await writefile(downloadedData);
    let uploadResponse = await uploadData(file, "drive.com")
    return uploadResponse;
  }

  async function process2 () {
    let downloadedData1 = await fetchData("www.google.com");
    let file1 = await writefile(downloadedData1);
    let uploadResponse1 = await uploadData(file1, "drive.com")
    return uploadResponse1;
  }

  async function process3 () {
    let downloadedData2 = await fetchData("www.google.com");
    let file2 = await writefile(downloadedData2);
    let uploadResponse2 = await uploadData(file2, "drive.com");
    return uploadResponse2;
  }

  console.log("start");
  // processing();
  Promise.all([process1(), process2(), process3()]).then(function process(value ){  // it parellerly executing all the proceses
    console.log(value);
  })
  console.log("end");