// removing duplicates using filter and indexof function
const barr = [1, 2, 3, 2, 4, 5, 66, 66, 7];
const uniqueArray = barr.filter((item, index) => barr.indexOf(item) === index);
console.log(uniqueArray);

// you can also sole with set

const adrr = [1, 2, 2, 3, 4, 3, 5];
const uniqueArr = [...new Set(adrr)];
console.log(uniqueArr);

// now the main

function removeduplicates(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    var isDuplicate = false;

    for (var j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      //   unique[unique.length] = arr[i];
      unique.push(arr[i]);
    }
  }
  return unique;
}

var arr = [1, 2, 3, 4, 5, 4, 54, 5, 5];
var result = removeduplicates(arr);
console.log("this is simple", result);
