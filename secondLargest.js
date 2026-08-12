let arr=[2,1, 0, 9, 5, 8];
let largest=0;
let secondLargest=-1;

for (let i=0; i<arr.length;  i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest =arr[i];
    }
    else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
    }
}
    console.log(secondLargest)

















