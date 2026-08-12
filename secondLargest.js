// let arr=[2,1, 0, 9, 5, 8];
// let largest=arr[0];
// let secondLargest=-1;

// for (let i=0; i<arr.length;  i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest =arr[i];
//     }
//     else if (arr[i] < largest && arr[i] > secondLargest) {
//         secondLargest = arr[i];
//     }
// }
//     console.log(secondLargest)



// let arr=[3, 7, 6, 1, 4, 5];
// let index=3;
// for (let i=0; i<arr.length; i++) {
//     if (arr[i] > arr[index]) {
//         index = i;
//     }
// }
// console.log(index);

let isSorted = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        isSorted = false;
        break;
    }
}
console.log("Is the array sorted? " + isSorted);
