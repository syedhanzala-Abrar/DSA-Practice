// let n=25;
// let square = n * n;
// let lastDigits = square % Math.pow(10, String(n).length);
// if (lastDigits === n) {
//     console.log(n + " is an automorphic number.");
// } else {
    console.log(n + " is not an automorphic number.");
}





let n=50;
let square = n * n;
while (n > 0) {
    let r1 = n % 10;
    let r2 = square % 10;
    if (r1 != r2) {
        console.log("" + n + " is not an automorphic number.");
        break;
    }
}
