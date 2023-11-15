// Import required modules
const http = require('http');
const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create an Express application
const app = express();

// Middleware to parse incoming request body
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// Define a route handler for the root URL
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/call-java-method', (req, res) => {
  //   const param = req.query.param; // Get the parameter from the query string

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'aaDetector.jar']);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    console.log(`Java process output: ${data}`);
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  res.json({ message: 'Java method called successfully' });
});

// Define a route handler to process the form submission
app.post('/process-input', (req, res) => {
  const inputText = req.body.inputText;
  console.log('Received input:', inputText);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Create a text file and write the input text to it
  const filePath = 'output.java';

  fs.writeFile(filePath, inputText, (err) => {
    if (err) {
      console.error('Error creating file:', err);
      // res.status(500).send('Error creating file');
    } else {
      console.log('File created successfully');
      // res.send('Input received and file created');
    }
  });

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'Detection', '0'], {
    env: {
      NODE_ENV: 'production',
      PATH: process.env.PATH,
    },
  });

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully.' });

  });

});

app.post('/refactorAA', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line - 1;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // // Create a text file and write the input text to it
  // const filePath = 'output.java';

  // fs.writeFile(filePath, inputText, (err) => {
  //     if (err) {
  //     console.error('Error creating file:', err);
  //     // res.status(500).send('Error creating file');
  //     } else {
  //     console.log('File created successfully');
  //     // res.send('Input received and file created');
  //     }
  // });  

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'AssertionRoulette', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorCI', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'ConstructorInitialization', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorEH', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'ExceptionHandling', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorIT', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'IgnoredTest', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorET', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'EmptyTest', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorDA', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'DuplicateAssert', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorUP', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'UnnecessaryPrint', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorRA', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'RedundantAssertion', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorMG', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'MysteryGuest', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorMN', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'MagicNumber', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorGF', (req, res) => {
  // const inputText = req.body.inputText;
  const line = req.body.line;
  // console.log('Received input:', inputText);
  console.log('Received input:', line);
  console.log('Input type: ' + req.headers['content-type']);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'GeneralFixture', line.toString()]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});

app.post('/refactorAll', (req, res) => {
  // const inputText = req.body.inputText;
  // console.log('Received input:', inputText);
  var retVal = "";

  // Spawn a new Java process and call the method
  const javaProcess = spawn('java', ['-jar', 'TestSmellDetector.jar', 'RefactorAll', 0]);

  // Handle the Java process output
  javaProcess.stdout.on('data', (data) => {
    // console.log(`Java process output: ${data}`);
    retVal += data;
  });

  javaProcess.stderr.on('data', (data) => {
    console.error(`Java process error: ${data}`);
  });

  // Send a response to the client
  // res.send('Java method called successfully.');
  javaProcess.on('close', (code) => {
    console.log(`Java process exited with code ${code}`);

    console.log(retVal.toString());
    // Send the output data back to the client
    res.json({ retVal, message: 'Code processed successfully' });

  });
});
