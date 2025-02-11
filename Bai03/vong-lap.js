let tenArr = ["Anh", "Bảo", "Chung", "Duy"];

// 1. vòng lặp for
for (let i = 0; i < tenArr.length; i++) {
    console.log(tenArr[i]);
}
// max index = length - 1
for(let i = tenArr.length-1; i >= 0; i--) {
    console.log(tenArr[i]);
}

// 2. vòng lặp for of
for (let item of tenArr) {
    console.log(item);
}

// 3. while
console.log("// DEMO WHILE");
let i = 0;
while (i < tenArr.length) {
    console.log(tenArr[i]);
    i++;
}
// 4. do while
console.log("// DO WHILE");
let i2 = 0;
do {
    console.log(tenArr[i2]);
    i2++;
} while (i2 < tenArr.length); 