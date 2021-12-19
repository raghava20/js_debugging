// Find the culprits and nail them — debugging javascript loops

// Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;

// for (var i = 1; i < 11; i--) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i]
}
console.log(new_string);

// Write a code to print the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = “”;

// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] + , 
// }
// console.log(new_string);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = '';

for (var i = 0; i < 11; i++) {
    new_string += numsArr[i] + ",";
}
console.log(new_string.slice(0, -1));

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// var new_string = "";

// for (var i = 11; i > 0; i--) {
//     new_string += numsArr[i] + " "
// }
// console.log(new_string);

var new_string = "";
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


for (var i = 11; i >= 0; i--) {
    new_string += numsArr[i] + " "
}
console.log(new_string.trim());

// Write a code to replace the array value — If the number is even, replace it with ‘even’.


// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);


var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 !== 0) {
        numsArr[i] = "even"
    }
}
console.log(numsArr);

// Write a code to add all the numbers in the array

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum;
for (var i = 0; i <= 10; i++) {

    sum += numsArr[i]
}
console.log(sum);

// Write a code to add the even numbers only

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 11; i++) {
    if (numsArr[i] % 2 == 0)
        sum += numsArr[i]
}
console.log(sum);

// Write a code to add the even numbers and subract the odd numbers

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        sum += numsArr[i]
    }
    else {
        sum -= numsArr[i]
    }
}
console.log(sum);


// Write a code to print inner arrays

// var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); {
//     console.log( numsArr[i])
//    }

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
    console.log(numsArr[i])
}

// Write a code to print elements in the inner arrays

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = [...(numsArr.flat())];

console.log(str_all.join(""));

// Write a code to replace the array value — If the index is even, replace it with ‘even’.

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];

for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++)
        if (inner_array[j] % 2 !== 0) {
            inner_array[j] = "even"
        }
}
console.log(numsArr);


// Write a code to print elements in the inner arrays in reverse

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var str_all = [];
for (i = 1; i >= 0; i--) {
    var inner_array = numsArr[i];
    for (var j = inner_array.length - 1; j >= 0; j--)
        str_all.push(inner_array[j])
}
console.log(str_all.join(" "));

// Write a code to add elements in the inner arrays based on odd or even values

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i]%2!=0)
//  {
//  sum_odd += numsArr[i]
//  }
//  else
//  {
//  sum_even += numsArr[i]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
    var inner_array = numsArr[i];
    for (var j = 0; j < inner_array.length; j++) {
        if (inner_array[j] % 2 != 0) {
            sum_odd += inner_array[j]
        }
        else {
            sum_even += inner_array[j]
        }
    }
}
console.log(sum_odd);
console.log(sum_even);