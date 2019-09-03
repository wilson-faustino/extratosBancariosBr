const arr = [0, 1, 2, 3, 4, 5, 6];

// function each(arr) {

//    return arr;
// }


arr.forEach((item, index, arr) => {
   arr[index] = item + 2;
});

console.log(arr);