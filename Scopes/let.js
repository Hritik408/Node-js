{
    let x = 10;
    console.log(x);
}

// console.log(x);

function fun(){
    console.log(y);  // can't access y before initialization
    let y = 15;
    console.log(y);
}

fun();
console.log(y);