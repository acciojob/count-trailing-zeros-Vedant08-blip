function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = parseInt(prompt("Enter a non-negative integer:"));
const result = trailingZeros(input);
alert(`Number of trailing zeros in ${input}! is: ${result}`);