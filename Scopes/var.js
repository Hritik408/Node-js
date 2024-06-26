function fun(){
    console.log(x);  // why we get undefined -> lexical scoping
    var x = 10;
    console.log(x);
}

{
    var y = 11; // become global due to var  // learn more from mdn
    console.log(y);
}
console.log(y);

fun();

if(true){
    var p = 101;
}

if(false){
    var o = 102;
}
console.log(p);
console.log(o);