let arr=[67, 32, 9, 54, 76];
let temp =arr[0];

for (let i=0; i<arr.length -1 ;  i++) {
    arr[i] =arr[i+1];

    }

    arr[arr.length -1] = temp;
console.log(temp);



