const express = require('express')
const readXlsxFile = require('read-excel-file/node');
const hbs = require('hbs');
const app = express()

hbs.registerHelper("changeToPrettyDate", function(value) {
  // console.log(value.toString());
  let array = value.toString().split(' ');
  // console.log(array);
  let day = array[2];
  let month = array[1];
  let year = array[3];
  let connectDate = day + ' ' + month + ' ' + year;
  // console.log(connectDate);
  return connectDate;
})

app.get('/', function(req, res) {
  // code to read data from excel sheet
  // File path.
  readXlsxFile('./public/data.xlsx').then((rows) => {
    // console.log(rows);
    console.table(rows);

    rows = rows.map(val => {
      console.log(val);
      let className = newFunction(val[2]);
      val.push(className);
      let newvalue = newFunction3(val[3])
      val.push(newvalue);
      // console.log(val);
      return val;
    })

    console.table(rows);

    res.render('index.hbs', {
      cards: rows
    });
  }).catch(e => {
    console.log(e);
  })

})

let newFunction = function(valtwo) {
  // / what is the date today?

  let today = new Date().getTime(); // 08932498172349812734 these are milliseconds since 1970

  // how many days since last leave?

  // last leave - today = number of days since last leave

  let lastLeave = new Date(valtwo).getTime(); // 981740189723401892374

  let numberOfDaysSinceLastLve = today - lastLeave; // 890234871236

  let convertIntoDays = numberOfDaysSinceLastLve / (1000 * 60 * 60 * 24); // 167.9080978 days

  // if number of days since last leave > 90 days --- give this guyy the leave
  //console.log({convertIntoDays});
  if (convertIntoDays > 90) {
    //console.log('change the color of the card shown in website into red.');
    return 'red';
  } else {
    // if < 90 days -- show how many days left until next leave
    //console.log('only show remaing days until next leave');
    return '';
  }
}

let newFunction3 = function(valthree) {

  let today = new Date().getTime(); // 08932498172349812734 these are milliseconds since 1970

// how many days since last leave?

// last leave - today = number of days since last leave

let lastLeave = new Date(valthree).getTime(); // 981740189723401892374

let numberOfDaysSinceLastLve = today - lastLeave; // 890234871236

let convertIntoDays = numberOfDaysSinceLastLve / (1000 * 60 * 60 * 24); // 167.9080978 days

// if number of days since last leave > 90 days --- give this guyy the leave
//console.log({convertIntoDays});
if (convertIntoDays > 90) {
    console.log('change the color of the card shown in website into red.');
    return convertIntoDays;
    }
else {
    // if < 90 days -- show how many days left until next leave
    console.log('only show remaing days until next leave');
    return convertIntoDays;
    }
}




// a new route has been added at this point
app.get('/addData', function(req, res) {
  res.render('adddata.hbs');
})

app.get('/torees', function(req, res) {
  res.render('torees.hbs', {});
})

app.listen(3000)
