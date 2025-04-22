// calback function ek aisa function hota hai jo ek function ke andar pass hota hai
function product(a,b,c){
    return a*b*c;
}
function fun(x,y){
    let a = x(2,4,5);
    console.log(a-y);
}
fun(product,7);//33
