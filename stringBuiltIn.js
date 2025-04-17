let s="Deshratna Bharti";
console.log(s);
console.log(s.toUpperCase);//ye ek nayi string print karti hai jo original ki copy hoti hai
console.log(s.toLowerCAse);
console.log(s.trim);//ye aage aur piche se space ko hata deta hai
console.log(s.indexOf('D'));//ye 'D' ka index de dega
console.log(s.lastIndexOf('a'));//ye a ka last index de dega
console.log(s.charAt(3));//ye 3rd index par kya hai usko la kar de dega
console.log(s.slice(5));//ye 5th index se lekar last tak sab print kar dega
console.log(s.slice(2,6));// ye 2nd index se kar 5th tak sab print kar dega

//split
let s2 = "Deshratna Bharti is a 3rd year student";
console.log(s2);
let arr=s2.split(' ');//jaha jaha space hai waha se ye split ho gayega
for(const ele of arr){
    console.log(ele);
}
