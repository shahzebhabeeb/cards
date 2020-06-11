const readXlsxFile = require('read-excel-file/node');

readXlsxFile('./public/data.xlsx').then((rows) => {
  // `rows` is an array of rows
  // each row being an array of cells.
  console.table(rows);
  // let cardisred = newFormula('1 Jan 2020');

  rows = rows.map(val => {
    // console.log(val);
    val.push('red');
    // console.log(val);
    return val;
  })

  console.table(rows);
})
