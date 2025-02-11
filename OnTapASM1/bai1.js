console.log("//Bài 1: Khai Báo & Sử dụng hàm có tham số và giá trị trả về ");

// tạo hàm
function tinhChuVi(thamSo) {
    let ketQua = thamSo *2 *3.14;
    return ketQua;

    // return thamSo *2 *3.14;
}

// sử dụng hàm
// ép kiểu giá trị nhập vào từ string -> number
let banKinh = Number(prompt("Mời nhập vào bán kính:"));
let chuVi = tinhChuVi(banKinh);
console.log("Chu vi hình tròn là:" + chuVi);