function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Take input from the user
const input = parseInt(prompt("Enter a non-negative integer:"));

// Check if input is valid
if (!isNaN(input) && input >= 0 && input <= 10000) {
  const result = trailingZeros(input);
  alert(`Number of trailing zeros in ${input}! is: ${result}`);
} else {
  alert("Please enter a valid non-negative integer (0 to 10000).");
}