const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("/src", express.static('./src/'));

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);