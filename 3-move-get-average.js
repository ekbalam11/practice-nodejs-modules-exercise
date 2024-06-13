/** Leer README */

function getAvgFromArray(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

}

getAvgFromArray([1,2,5,8]);