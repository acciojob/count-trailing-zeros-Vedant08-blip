function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Prompt user for input and alert result
const input = parseInt(prompt("Enter a non-negative integer:"), 10);

if (!isNaN(input) && input >= 0) {
  const result = trailingZeros(input);
  alert(`Number of trailing zeros in ${input}! is ${result}`);
} else {
  alert("Please enter a valid non-negative integer.");
}