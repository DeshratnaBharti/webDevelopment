// filter out odd element
let arr =[1,9,2,7,4,5,6,2,8];
console.log(arr);

arr=arr.filter((ele)=>{
    if(ele%2==0) return true;
    else return false;
});
 console.log(arr);//[ 2, 4, 6, 2, 8 ]
  
 arr=arr.filter(ele=>(ele<4));
 console.log(arr);//[ 2, 2 ]
