
const port = parseInt(process.env.PORT, 10) || 5000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "./db/package.db"

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/submit-data', function (req, res) {
  console.log(req.body.units);
    const name = req.body.pname;
    res.send(name + ' Submitted Successfully!');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
