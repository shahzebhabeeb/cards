const express = require('express')
const readXlsxFile = require('read-excel-file/node');
const hbs = require('hbs');
const app = express()

hbs.registerHelper("changeToPrettyDate",function(value) {
  console.log(value.toString());
  let array = value.toString().split(' ');
  console.log(array);
  let day = array[2];
  let month = array[1];
  let year = array[3];
  let connectDate = day + ' ' + month + ' ' + year;
  console.log(connectDate);
  return connectDate;
})

app.get('/', function (req, res) {
  // code to read data from excel sheet
  // File path.
  readXlsxFile('./public/data.xlsx').then((rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    res.render('index.hbs', {
      cards: rows
    });
  }).catch(e => {
    console.log(e);
  })

app.get('/noman', function (req, res) {
      res.render('noman.hbs', {});
    })
    app.get('/torees', function (req, res) {
        res.render('torees.hbs', {});
      })
})

// Sharjeel please add a route for /torees and /noman

app.listen(3000)
