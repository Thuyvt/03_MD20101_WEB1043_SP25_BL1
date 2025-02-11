// CÓ 3 LOẠI HÀM CƠ BẢN
// 1. HÀM KHÔNG THAM SỐ KHÔNG GIÁ TRỊ TRẢ VỀ
// 2. HÀM CÓ THAM SỐ
// 3. HÀM CÓ GIÁ TRỊ TRẢ VỀ

console.log("// Demo hàm cơ bản không tham số không giá trị trả về")

// Khai báo hàm
function xinChao() {
    console.log("Xin chào");
    console.log("Konichiwwa");
    console.log("Ni hảo");
}
// gọi hàm và sử dụng hàm
xinChao();

console.log("// Demo hàm có tham số");
function xinChaoCoThamSo(thamSo01, thamSo02) {
    console.log("Xin chào " + thamSo01);
    console.log("Đến với lớp " + thamSo02);
}

// Gọi  hàm có tham số truyền vào
xinChaoCoThamSo("Vũ Thị Thúy", "MD20101");

// Ví dụ: Nhập vào ký hiệu quốc gia, in ra câu xin chào của quốc gia tương ứng
// viết hàm nhận giá trị quocGia hiển thị câu chào tương đương
function xinChaoTheoQuocGia(quocGiaParam) {
    if (quocGiaParam == "vi") {
        console.log("Xin chào");
    } else if (quocGiaParam == "jp") {
        console.log("Konichiwa");
    } else if (quocGiaParam == "ch") {
        console.log("Ni hảo");
    } else {
        console.log("Xin lỗi, tôi không biết tiếng của bạn"); 
    }
}

// let quocGia = prompt("Mời nhập quốc gia(vi,jp,ch):");
// xinChaoCoThamSo(quocGia);

console.log("// Demo hàm có giá trị trả về");
function hamCoGiaTriTraVe() {
    return "Đây là hàm có gia trị trả về";
}

// Gọi hàm
let gtriNhanDuoc = hamCoGiaTriTraVe();
console.log("Giá trị nhận được từ hàm: " + gtriNhanDuoc);

console.log("// Demo hàm có tham số, có giá trị trả về");
// VD: Nhập vào năm sinh, nếu tính tuổi >= 18 thì trả về giá trị true, nếu không trả về false

// Viết hàm
function kiemTraTuoi(namSinh) {
    // Lấy năm hiện tại
    let namHienTai = new Date().getFullYear();
    console.log(namHienTai);
    if (isNaN(namSinh)) {
        return false;
    } else {
        console.log("Nhập đúng");
        if (namHienTai - Number(namSinh) >= 18) {
            return true;
        } else {
            return false;
        }
    }
}

let namNhapVao = prompt("Mời nhập năm sinh: ");
let kiemTra = kiemTraTuoi(namNhapVao);
if (kiemTra) {
    console.log("Đã trưởng thành");
} else {
    console.log("Nhập sai hoặc chưa đủ tuổi");
}