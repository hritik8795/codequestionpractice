function compressString(input) {
  let result = " ";
  let count = " ";

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += count + input[i - 1];
      count = 1;
    }
  }
  return result;
}
// const input = "aaaaabbbbbaaaccc";
// const output = compressString(input);
// console.log(output);
// jab output 5a5b3a3c chahiye ho

// final output

function compressBytotalCount(input) {
  let result = "";
  let seen = "";
  let counts = {};

  for (let char of input) {
    if (!seen.includes(char)) {
      seen += char;
    }
    counts[char] = (counts[char] || 0) + 1;
  }
  for (let char of seen) {
    result += counts[char] + char;
  }
  return result;
}

const input = "aaabbbbbaaabccc";
const output = compressBytotalCount(input);
console.log(output);
