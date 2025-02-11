console.log("Bài 2: Vòng lặp");

console.log("// Vòng lặp từ 1 đến 10");
for (let i = 1; i <= 10; i++) { 
    // log ra giá trị
    console.log("i = " + i);
}

console.log("// Vòng lặp từ 1 đến n");
// 1. Nhập n từ bàn phím
let n = Number(prompt("Mời nhập số nguyên n: "));

// 2. Vòng lặp từ 1 đến n
for (let i = 1; i <= n; i++) { 
    // hiển thị giá trị
    console.log("i = " + i);
}

// 3. Vòng lặp hiển thị số chẵn từ 1 đến n
console.log("Số chẵn từ 1 đến n: ");
for (let i = 1; i <= n ; i++) {
    // tìm số chẵn 
    if ( i%2 === 0) {
        console.log("i = " + i);
    }
}