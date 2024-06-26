function fun() {
    console.log("fun called");
}

function gun(fn) {
    console.log("insider gun");
    fn();
    console.log("leaving gun");
    console.trace();
}
gun(function () {  // inside gun is as passed function as an argument
    console.log("new function passed");
});
f
// gun(fun);