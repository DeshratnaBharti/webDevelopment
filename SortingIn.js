// sorting in js
let arr=[1,-9,-2,7];
console.log(arr);//[ 1, -9, -2, 7 ]

arr=arr.sort((a,b)=> Math.abs(a)- Math.abs(b));//-ve value ko ignore kar diya
console.log(arr);//[ 1, -2, 7, -9 ]

arr=arr.sort();//ye galat sort hai
console.log(arr);//[ -2, -9, 1, 7 ]

arr=arr.sort((a,b)=>a-b);//asli sort yahi hai
console.log(arr);//[ -9, -2, 1, 7 ]

arr=arr.sort((a,b)=>b-a);//decreasing order me sorting
console.log(arr);//[ 7, 1, -2, -9 ]
