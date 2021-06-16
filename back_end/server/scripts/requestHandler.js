const fs = require('fs');

function writeDataToJson(path, data) {
  // Writes data to the given path
  fs.writeFileSync(path, JSON.stringify(data))
}

function execPython(script) {
  /*
  Executes the given python script
  :param script: the script to execute
  :returns none
  */
  const python = spawn('python3', [script]);

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  // send data to browser
  });
}

function readJson(path) {
  /*
  Reads the json objects
  :param path: the path of the json
  :return itemList: list of the items and prices
  */
  let rawData = fs.readFileSync(path);
  let itemList = JSON.parse(rawData);
  return itemList;
}