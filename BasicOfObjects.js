//object is kind of like map/dictionary where we have "key-value" pairs

var details=["Deshratna",21,8.02,false];

let x ={
    name:"Deshratna",
    age:21,
    cgpa:8.02,
    "is garduate" :false
};

console.log(x.age);//how to print value of key 
//change the value of a key
x[`age`]=35;
console.log(x[`age`]);
