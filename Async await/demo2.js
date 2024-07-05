function fun() {
    return new Promise(function f(resolve, reject){
        console.log("hehehe");
        setTimeout(function process() {
            resolve(123);
        }, 4000);
    })
}

let x = fun();
x.then(function exe(value){
    console.log("value is ", value);
    for(let i = 0; i < 10000000; i++){
        //do some task
    }
    return 100;
})

x.then(function exe2(value){
    console.log("your value is ", value);
    return 200;
})