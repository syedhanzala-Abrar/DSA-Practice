let n=12345;
let product=1;
while(n>0){
    product*=n%10;
    n=Math.floor(n/10);
}
console.log(product);