let arr=[1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1];
let maxCount = 1;
let currentCount = 1;
for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        currentCount++;
    } else {
        if (currentCount > maxCount) {
            maxCount = currentCount;
        }
        currentCount = 1;
    }
}
console.log(maxCount);