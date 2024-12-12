const arr =[5,1,3,2,6];

for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i]*2;
}
console.log(arr);
function double(x)
{
    return 2*x;
}
function binary (x)
{
    return x.toString(2);
}


const output1=arr.map(double);
const output2=arr.map(binary);

const output3= arr.map(function triple(x)
{
    return x*3;
});

console.log(output3);
console.log(output1);
console.log(output2);