// call a function and get a value out of it. show in console.table
let today = new Date().getTime(); // 08932498172349812734 these are milliseconds since 1970

// how many days since last leave?

// last leave - today = number of days since last leave

let lastLeave = new Date(valtwo).getTime(); // 981740189723401892374

let numberOfDaysSinceLastLve = today - lastLeave; // 890234871236

let convertIntoDays = numberOfDaysSinceLastLve / (1000 * 60 * 60 * 24); // 167.9080978 days

// if number of days since last leave > 90 days --- give this guyy the leave
console.log({convertIntoDays});
if (convertIntoDays > 90) {
  console.log('change the color of the card shown in website into red.');
  return convertIntoDays;
} else {
  // if < 90 days -- show how many days left until next leave
  console.log('only show remaing days until next leave');
  return convertIntoDays;
}
