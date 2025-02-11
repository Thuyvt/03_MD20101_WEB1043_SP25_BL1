console.log("//DEMO OBJECT");

// Khai báo object
let tenObject = {
    tenThuocTinh: "Giá trị thuộc tính",
    tenThuocTinh2: "Giá trị thuộc tính 2",
    tenThuocTinh3: 2000,
    tenPhuongThuc: function() {
        console.log("Đây là phương thức của đối tượng");
    }  
}

// In ra thông tin object
console.log(tenObject);
// Gọi hàm của object
tenObject.tenPhuongThuc();
// Gọi đến thuộc tính của đối tượng
console.log(tenObject.tenThuocTinh2);
console.log(tenObject["tenThuocTinh3"]);

// VD mảng object
// [obj1, obj2, obj3]
// obj1 = {ten: "", tuoi: ""}
// obj2 = {ten: "", tuoi: ""}

// Thực hiện tạo 1 mảng danh sách sinh viên
// Khai báo 3 object sinh viên
let sv1 = {
    ten: "Nguyễn Văn Anh",
    namSinh: "2000",
    diaChi: "Hà Nội"
}
let sv2 = {
    ten: "Nguyễn Thị Anh",
    namSinh: "2001",
    diaChi: "Hà Nội"
}
let sv3 = {
    ten: "Nguyễn Văn Bảo",
    namSinh: "2001",
    diaChi: "Nam Định"
}
// Tạo mảng chứa 3 objects sinh viên
let svArr = [sv1, sv2, sv3];
console.log(svArr);

// Duyệt các giá trị thuộc tính của đối tượng
for (let thuoctinh in sv1) {
    // in ra tên thuộc tính
    console.log(thuoctinh);

    // in ra giá trị thuộc tính
    console.log(sv1[thuoctinh]);
}

// Đổi giá trị thuộc tính
sv1.diaChi = "Hà Nam";
console.log(sv1);

// Duyệt qua tất cẩ giá trị của 1 mảng object
// Mảng svArr

for (let sinhVien of svArr) {
    // In giá trị của từng phần tử trong mảng
    console.log(sinhVien);

    // đổi tất cả địa chỉ sinh viên về Hà Nội
    sinhVien.diaChi = "Hà Nội";
}

console.log(svArr);

