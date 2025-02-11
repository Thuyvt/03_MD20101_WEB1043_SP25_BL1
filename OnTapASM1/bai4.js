console.log("Bài 04: Khai báo mảng object");
let thongKeBanHang = [
    {
        sanPham: "iPhone 15",
        soLuong: 5,
        donGia: 21000000
    },
    {
        sanPham: "iPhone 15 Pro",
        soLuong: 2,
        donGia: 21000000
    },
    {
        sanPham: "iPhone 15 Pro Max",
        soLuong: 2,
        donGia: 1000000
    }
]

// Duyệt mảng in dữ liệu
console.log("// Duyệt mảng in dữ liệu");
for (let sanPham of thongKeBanHang) {
    // C1
    console.log("Tên sản phẩm:" + sanPham.sanPham);
    console.log("Số lượng: " + sanPham.soLuong);
    console.log("Đơn giá: " + sanPham.donGia);
    console.log("----------------------"); 

    // C2
    // console.log("Thông tin sản phẩm: " + sanPham);
 }

console.log("Tìm các phần tử có đơn giá lớn nhất trong mảng object");

// 1. Tìm giá trị max
let donGiaMax = 0;
for (let sp of thongKeBanHang) { 
    // so sánh tìm max
    if (sp.donGia > donGiaMax) { 
        donGiaMax = sp.donGia;
    }
}
// Kết thúc vòng lặp thứ 1 sẽ tìm được max
// 2. Tìm phần tử có đơn giá = giá max push vào mảng trung gian
console.log("Đơn giá max: ", donGiaMax);
// Tạo một mảng trung gian
let spMax = [];
for (let sp of thongKeBanHang) {
    if (sp.donGia === donGiaMax) {
        spMax.push(sp.sanPham);
    }
}

console.log("Sản phẩm có đơn giá max:" + spMax.join(", "));

//3. Thêm 2 phần tử vào mảng đã có và hiển thị thông tin mảng mới
thongKeBanHang.push({
    sanPham: "iphong 16",
    soLuong: 3,
    donGia: 50000000
});

// C2: push object vào mảng
let iphone = {
    sanPham: "iphong 16 plus",
    soLuong: 1,
    donGia: 51000000
};
thongKeBanHang.push(iphone);
// Hiển thị lại thông tin mảng mới
console.log("// Hiển thị lại thông tin mảng mới");
for (let sp of thongKeBanHang) {
    // C1
    console.log("Tên sản phẩm:" + sp.sanPham);
    console.log("Số lượng: " + sp.soLuong);
    console.log("Đơn giá: " + sp.donGia);
    console.log("----------------------"); 

    // C2
    // console.log("Thông tin sản phẩm: " + sanPham);
 }
//4. Hiển thị thông tin phần tử có doanh số cao nhất
// Tìm doanh số max
let doanhSoMax = 0;
for (let sp of thongKeBanHang) { 
    if (doanhSoMax < sp.soLuong * sp.donGia) {
        doanhSoMax = sp.soLuong * sp.donGia;
    }
}
console.log("Doanh số max: " + doanhSoMax);
// Tạo mảng trung gian, push phần tử có doanh số = max và mảng
let spDoanhSoMax = [];
for (let sp of thongKeBanHang) {
    if (doanhSoMax === sp.donGia * sp.soLuong) {
        spDoanhSoMax.push(sp.sanPham);
    }
}
console.log("Danh sách sản phẩm có doanh số lớn nhất: " + spDoanhSoMax.join(", "));
