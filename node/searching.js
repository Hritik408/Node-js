 export function linearSearch(arr, x){
    for(let i = 0; i < x; i++){
        if(arr[i]==x) return i;
    }
    return NaN;
}

 export function binarySearch(arr, x) {
    // write logic
}

// module.exports = {
//     linear: linearSearch,
//     binary: binarySearch
// }

export {
    binarySearch
}