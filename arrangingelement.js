let x=[1,2,2,3,3,4,];
let y=[2,3,4,4,6,6,7];
let i=0;
let j=0;
let result=[];
const mergeArrays = (x, y) => {
    while (i < x.length && j < y.length) {
        if (x[i] < y[j]) {
            result.push(x[i]);
            i++;
        } else {
            result.push(y[j]);
            j++;
        }
    }
    // Push any remaining elements from either array
    while (i < x.length) {
        result.push(x[i]);
        i++;
    }
    while (j < y.length) {
        result.push(y[j]);
        j++;
    }
    return result;
};
console.log(mergeArrays(x, y));
