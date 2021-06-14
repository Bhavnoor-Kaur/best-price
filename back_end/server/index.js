// server/index.js

const express = require("express");
const { spawn } = require("child_process");

const PORT = process.env.PORT || 3001;

const app = express();

// Used as a template to spawn child processes which can be a python script

// const ls = spawn('python3', ['./server/script1.py']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });


app.get('/aa', (req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn('python3', ['./server/script1.py']);
  // collect data from script
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
  });

  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  // in close event we are sure that stream from child process is closed
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);
  console.log(dataToSend);
  // send data to browser
  res.send(dataToSend)
  });

})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});