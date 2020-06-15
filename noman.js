// [1,2,3,4] >> [noman1,noman2,noman3,noman4]


let array = [1,2,3,4,5,6,7,100];

console.log('original array:', array);

// array[0] = 'noman' + array[0]; // noman1
// array[1] = 'noman' + array[1]; // noman2
// array[2] = 'noman' + array[2]; // noman2

let qasim = array.map(val => {
  console.log('this is a value', val);
  return 'noman'+val;
})

console.log('array:', qasim);
