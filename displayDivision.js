Array[];
for (let i=1;i*i<=n;i++) {
    if (n%i == 0) {
        arr.push(i)
    }   arr.push(n/i)
}