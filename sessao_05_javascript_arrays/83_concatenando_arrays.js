const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// METODO 1 - concat
const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = arr1.concat(arr2, [7, 8, 9], 'Luiz');
console.log(arr4);


// METODO 2 - ... spread rest
const arr5 = [...arr1, ...arr2];
console.log(arr5);

const arr6 = [...arr1, ...arr2, ...[7, 8, 9], 'Luiz'];
console.log(arr6);