// your code goes here
//const a=5;
//console.log(a);
//a=10;//this is wrong
//console.log(a);

//but this is true

const a=[4,6,2,9];
console.log(a);
a[0]=10;
console.log(a);//[ 10, 6, 2, 9 ]

//hum js ke Array me alag alag data type bhi dal sakte hai

arr=[4,"Deshratna",8.02,"3rd year",true];
console.log(arr);

//For loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//forOf loop
brr=[3,4,5,6,7];
for(const ele of brr){
    console.log(brr);
}

//foreach loop
brr.forEach((ele,i)=>{
// console.log(ele,i);
ele *=2;
});
console.log(brr);//no change in brr
