
function hello(){
    console.log("hello");
}
function mello(){
    
    console.log("mello");
}
setTimeout(hello,2*1000);
setTimeout(mello,1*1000);//pahle mello print hoga 
//isko aise bhi likh sakte hai
setTimeout(function() {
    console.log("hello");
}, 2*1000);
