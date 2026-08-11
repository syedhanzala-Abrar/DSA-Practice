let n = 153;
let sum = 0;
let original = n;
let digits = n.toString().length;

while (n > 0) {
    let digit = n % 10;
    sum += Math.pow(digit, digits);
    n = Math.floor(n / 10);
}

if (sum === original) {
    console.log(original + " is an Armstrong number.");
} else {
    console.log(original + " is not an Armstrong number.");
}