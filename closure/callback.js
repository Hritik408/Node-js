var arr = [1,2,3,4,5];
 let x = arr.map(function process(v,i){  // map -> for all the elements of given arr, it passes the  elements as an argument to the callback
    // console.log(v,i);
    return v*v;
})

console.log(x);