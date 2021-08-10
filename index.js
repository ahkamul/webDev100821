// Class 048: JS Reserve An Array

// by using logic 

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var i = 0; i < (arr.length / 2); i ++){
//     var temp = arr [i]
//     arr [i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
// }

// console.log(arr)

// by using library 

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.reverse())


// Class 049: JS Array Method

// Ex. 1 

// var arr = [4, 5, 9, 6]

// console.log(arr)
// console.log(arr.join())
// console.log(arr.join(' '))   // with space
// //console.log(arr.join( , ))   // with ,
// //console.log(arr.join( |))    // with |

// Ex. 2

// var arr = [4, 5, 9, 6]
// var arr2 = [5, 10, 45, 23]
// var arr3 = arr.concat(arr2)

// console.log(arr3)


// Ex. 3 (to check whether it is an array)

// var arr = [1, 2, 3, 4, 5]

// console.log(Array.isArray(arr))

 
// Ex. 4 

// var arr = [4, 5, 9, 6]
// var arr2 = Array.from(arr)

// console.log(arr2)

// Alternative way 

// var a = [1, 2]
// var b = a
// b [0] = 5

// console.log(a)

// using from method:

var a = [1, 2]
var b = Array.from(a)
b [0] = 5

console.log(a)
console.log(b)





