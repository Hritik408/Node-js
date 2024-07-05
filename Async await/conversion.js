async function fun() {
    console.log("entered");
    let x = await 30;  // or let x = await Promise.resolve(30)
    console.log("existing");
    return x; 
}

console.log("start");
let val = fun();
val.then(function f(value){
    console.log("value is", value);
})
console.log("end");