//now it load express module with `require` directive
import express from 'express';

var app = express()
//Define request response in /hello and response with text Hello World!
app.get('/world', function (req, res) {
  console.log(req.originalUrl);
  res.send('Hello World!')
})

app.get('/hi', function (req, res) {
  console.log(req.originalUrl);
  res.send('Hi World!')
})

//Launch listening server on port 8080 and consoles the log.
app.listen(8080, function () {
  console.log('app listening on port 8080!')
})
