// Phần 1: Khởi tạo các biến cần thiết
// 1. Danh sách ảnh, index từ 0-> 2
let danhSachAnh = [
    'img/pizza01.png',
    'img/pizza02.png',
    'img/pizza03.png'
];

// 2. Biến lưu vị trí ảnh hiện tại đang hiển thị 
let indexAnhHienTai = 2;

// 3. Biến lưu lại node slideshow để tương tác
let nodeSlideShow = document.getElementById("slideshow");

// Phần 2: Hiển thị ảnh
nodeSlideShow.src = danhSachAnh[indexAnhHienTai]; 

function chonAnh(index) {
    indexAnhHienTai = index;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}

// Lùi, tiến
// --, ++ để tăng hoặc giảm indexAnhHienTai
// đổi ảnh theo indexHienTai mới
function luiAnh() {
    if (indexAnhHienTai == 0) {
        indexAnhHienTai = 2;
    } else {
        indexAnhHienTai--;
    }

    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}
function tienAnh() {
    // C1: Toán tử 3 ngôi
    // indexAnhHienTai = indexAnhHienTai == 2 ? 0 : ++indexAnhHienTai;

    // C2: if else
    if (indexAnhHienTai == 2) {
        indexAnhHienTai = 0;
    } else {
        indexAnhHienTai++;
    }

    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
}

// Hiển thị lần lượt 3 ảnh, mỗi ảnh 1 s
function hienThiLanLuot() {
    //1 hiển thị ảnh 1 luôn
    indexAnhHienTai = 0;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
    // 2. Hiển thị ảnh 2 sau 1s
    setTimeout(()=> {
        indexAnhHienTai = 1;
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
    }, 1000);

    // 3. Hiển thị ảnh 3 sau 1s tiếp theo
    setTimeout(()=> {
        indexAnhHienTai = 2;
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
    }, 2000);
}
let vongLapVoHan;
function chayVoHan() {
    indexAnhHienTai = 0;
    nodeSlideShow.src = danhSachAnh[indexAnhHienTai];

    let boDem = 1;
    // Bắt đầu vòng lặp interval
    vongLapVoHan = setInterval(()=> {
        // tìm index 
        indexAnhHienTai = boDem % 3;
        // thay đổi ảnh
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];
        
        //log giá trị
        console.log("boDem" , boDem);
        console.log("indexAnhHienTai", indexAnhHienTai);

        // thay đổi ảnh
        nodeSlideShow.src = danhSachAnh[indexAnhHienTai];

        // Tăng bộ đếm để vòng lặp tiếp indexAnhHienTai tăng
        boDem++;
    }, 1000);
}

function dungVoHan() {
    // clearInterval: Dừng vòng lặp vô hạn
    clearInterval(vongLapVoHan);
}

