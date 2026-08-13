let arr=[2,7,4,9,6,11];
let even =0;
let odd=0;
for (let i=0; i<arr.length; i++) {
    if ((arr[i]%2===0 )) {
        even++;
    } else {
        odd++;
    }
}
console.log("Even:" ,even);
console.log("odd:" ,odd);
