function zerolast(arr) {
  list = [];
  zerocount = 0;

  for (let number of arr) {
    if (number === 0) {
      zerocount++;
    } else {
      list.push(number);
    }
  }
  while (zerocount-- > 0) {
    list.push(0);
  }
  return list;
}
let numbers = [1, 2, 3, 0, 9, 0, 5, 0];

console.log(zerolast(numbers));
