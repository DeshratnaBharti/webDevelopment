// map bascially use waha karte hai jaha agar mujhe ek array se ek aur array banana hai usi se related with some specific changes

function add10(ele){
    return ele+10;
}
let arr= [1,-6,-3,8];
console.log(arr);//[ 1, -6, -3, 8 ]

arr=arr.map(add10);
console.log(arr);//[ 11, 4, 7, 18 ]

//square of each ele
arr=arr.map(function(ele){
    return ele * ele;
});
console.log(arr);//[ 121, 16, 49, 324 ]

//divide each element by 10
arr=arr.map((ele)=>{
    return ele/10;
});
console.log(arr);//[ 12.1, 1.6, 4.9, 32.4 ]

//multiply each eement by 2
arr=arr.map(ele=>ele*2);
console.log(arr);//[ 24.2, 3.2, 9.8, 64.8 ]
