function kiemTra() {
    // 1. Khi nhân lưu lấy giá trị đã nhập trên form
    // 2. Kiểm tra giá trị đã nhập
    // Nếu có giá trị, giá trị hợp lệ => người dùng đúng
    // Nếu ko có giá trị, giá trị sai => hiển thị lỗi đã định nghĩa

    // 1. Kiểm tra giá trị tên
    let nodeTen = document.getElementById('ten-sv-id');
    console.log(nodeTen);// Lấy thông  tin node
    console.log(nodeTen.value);// Lấy giá trị ô input
    let tenSv = document.getElementById("ten-sv-id").value;
    if(tenSv.trim() === "") {
        // Sửa style của tex thông báo thành hiển thị
        document.getElementById("ten-bat-buoc").style.display = "block";
    } else {
        // Ẩn thông báo lỗi khi tên đã được nhập
        document.getElementById("ten-bat-buoc").style.display = "none";
    }
    // 2. Kiểm tra quê quán
    let queQuan = document.getElementById("que-quan-id").value;
    console.log("que-quan-id", queQuan);
    if(queQuan === "") { 
        document.getElementById("que-quan-bat-buoc").style.display = "block";
    } else {
        document.getElementById("que-quan-bat-buoc").style.display = "none";
    }

    // 3. Năm sinh
    let namSinh = document.getElementById("nam-sinh-id").value.trim();
    if (namSinh === "") { 
        document.getElementById("nam-sinh-bat-buoc").style.display = "block";
    } else if (isNaN(namSinh)) {
        document.getElementById("nam-sinh-la-so").style.display= "block";
    } else if (Number(namSinh) > 2007) {
        document.getElementById("nam-sinh-khong-hop-le").style.display = "block";
    } else {
        document.getElementById("nam-sinh-bat-buoc").style.display = "none";
        document.getElementById("nam-sinh-la-so").style.display= "none";
        document.getElementById("nam-sinh-khong-hop-le").style.display = "none";
    }
    // 4. Số điện thoại
    let sdt = document.getElementById("so-dien-thoai-id").value.trim();
    if (std = "") {
        // hiển thị lỗi bắt buộc
    } else if (isNaN(sdt)) {
        // hiển thị lỗi
    } else if (sdt.lenght !== 10) {
        // hiển thị lỗi
    } else {
        // form hợp lệ, ẩn lỗi đi
    }
    
    // 5. Giới tính
    let nodeGioiTinh = document.getElementsByName("gioi-tinh"); // trả về 3 phần tử
    let gioiTinhValue; // lưu lại giá trị giới tính đã chọn
    
    console.log("nodeGioiTinh", nodeGioiTinh);
    for (let node of nodeGioiTinh) {
        // kiểm tra trạng thái radio được chọn
        if(node.checked === true) {
            gioiTinhValue = node.value;
            break;
            // Tìm được giá trị, kết thúc vòng for
        }
    }   
    console.log("gioiTinhValue ", gioiTinhValue);
    if (gioiTinhValue == undefined) { 
        // hiển thị lỗi
        document.getElementById("gioi-tinh-bat-buoc").style.display = "block";
    } else {
        // ẩn lỗi
        document.getElementById("gioi-tinh-bat-buoc").style.display = "none";
    }

    // EMAIL
    let email = document.getElementById("email-id").value.trim();
    console.log("email-id", email);
    if (email === "") {
        document.getElementById("email-bat-buoc").style.display = "block";
    } 
    else if (!email.includes("@") || !email.includes(".")
    || email.indexOf("@") > email.indexOf(".")) {
        document.getElementById("email-khong-hop-le").style.display = "block";
    }
    else  {
        document.getElementById("email-bat-buoc").style.display = "none";
        document.getElementById("email-khong-hop-le").style.display = "none";
    }

    // Sở thích
    let nodeSoThich = document.getElementsByName("so-thich");
    console.log('so-thich', nodeSoThich);
    let soThich = [];

    // duyệt node 
    for( let node of nodeSoThich) {
        // nếu node được checked thì đưa value của node vào mảng soThich
        if (node.checked) {
            soThich.push(node.value);
        }
    }
    // hiển thị danh sách sở thích đã chọn
    console.log("soThich", soThich);

    // Kiểm tra lỗi bắt buộc phải chọn 
    if (soThich.length < 1) {
        // hiển thị lỗi
    } else {
        // ẩn lỗi
    }

    // HỌC PHÍ
    let hocPhi = document.getElementById("hoc-phi-id").value.trim();
    if (hocPhi ==="") {
        document.getElementById("hoc-phi-bat-buoc").style.display = "block";
    } else if (isNaN(hocPhi) || Number(hocPhi) <= 0) {
        document.getElementById("hoc-phi-la-so").style.display = "block";
    } else {
        document.getElementById("hoc-phi-bat-buoc").style.display = "none";
        document.getElementById("hoc-phi-la-so").style.display = "none";
    }
}   


// Hàm nhận true khi input họp lệ
// false khi input không hợp lệ
// return false để màn hình không tự f5
// chỉ return true, khi dữ liệu hợp lệ và gửi lên form
function changeQueQuan() {
    console.log("Thay đổi option trong select");
    let queQuan = document.getElementById("que-quan-id").value;
    console.log(queQuan);
    // kiểm tra giá trị quê quán để chèn value vào ô input hoc-phi-id
    if (queQuan === "1") {
        document.getElementById("hoc-phi-id").value = 50000000;
    } else if (queQuan === "2") {
        document.getElementById("hoc-phi-id").value = 30000000;
    } else if (queQuan == "3") {
        document.getElementById("hoc-phi-id").value = 40000000;
    }
}