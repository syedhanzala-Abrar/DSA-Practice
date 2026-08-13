let arr=[77, 55, 44, 33, 66, 54, 22, 30, 64, 7];
temp = arr[0];
for (let i = 0; i < arr.length / 2; i++) {
   temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);