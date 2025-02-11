// VD: Nhập điểm và thông báo kết quả
let diemSo = Number(prompt("Nhập vào điểm số"));
// if
if (diemSo >= 5) {
    console.log("Chúc mừng bạn đã qua môn");
}
if (diemSo < 5) {
    console.log("Chúc bạn may mắn lần sau");
}
// if else
if (diemSo >= 5) {
    console.log("Chúc mừng bạn đã qua môn");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
// if - else if - else
// >= 8: giỏi, >= 7.5: khá, >= 5: trung bình, >=3: yếu, kém
if (diemSo >= 8) {
    console.log("Bạn là học sinh giỏi");
} else if (diemSo >= 7.5) {
    console.log("Bạn là học sinh khá");
} else if (diemSo >= 5) {
    console.log("Bạn là học sinh trung bình");
} else if (diemSo >= 3) {
    console.log("Bạn là học sinh yếu");
} else {
    console.log("Bạn là học sinh kém");
}
// switch case
switch(true) {
    case (diemSo >= 8):
        console.log("Bạn là học sinh giỏi");
        break;
    case (diemSo >= 7.5):
        console.log("Bạn là học sinh khá");
        break;
    case (diemSo >= 5):
        console.log("Bạn là học sinh trung bình");
        break;
    case (diemSo >= 7.5):
        console.log("Bạn là học sinh trung yếu");
        break;
    default:
        console.log("Bạn là học sinh kém");
        break;
}

let thu = Number(prompt("Nhập vào thứ trong tuần"));

// DÙNG switch case kiểm tra giá trị nhập vào và đưa ra thông báo
switch(thu) {
    case 2:
        console.log("Hôm nay là thứ 2");
        break;
    case 3:
        console.log("Hôm nay là thứ 3");
        break;
    case 4:
        console.log("Hôm nay là thứ 4");
        break;
    case 5:
        console.log("Hôm nay là thứ 5");
        break;
    case 6:
        console.log("Hôm nay là thứ 6");
        break;
    case 7:
        console.log("Hôm nay là thứ 7");
        break;
    case 8:
        console.log("Hôm nay là chủ nhật");
        break;
    default:
        console.log("Dữ liệu nhập vào không thỏa mãn");
        break;
}
// while