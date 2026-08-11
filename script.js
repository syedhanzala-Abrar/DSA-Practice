// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         row += "  ";
//     }
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "* ";
//     }

//     console.log(row);
// }




// for (let i = 4; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= 5 - i; j++) {
//         row += "  ";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "* ";
//     }

//     console.log(row);
// } 

let n=12321;
let reversed = 0;
let original = n; 
while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
}
if (reversed === original) {
    console.log(original + " is a palindrome.");
} else {
    console.log(original + " is not a palindrome.");
}