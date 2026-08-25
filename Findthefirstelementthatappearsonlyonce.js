let arr=[4, 5, 1, 2, 1, 4, 5, 7];
let map= new Map();

for (let num of arr) {
    map.set(num,(map.get(num)||0)+1);
}

for (let num of arr) {
    if (map.get(num) === 1) {
        console.log(num);
        break;
    }
}