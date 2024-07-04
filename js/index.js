// Bai 1

function ketQua() {
  var diemChuan = document.getElementById("diem-chuan").value * 1;
  var khuVuc = document.getElementById("khu-vuc").value * 1;
  var doiTuong = document.getElementById("doi-tuong").value * 1;
  var diemMon1 = document.getElementById("diem-mon1").value * 1;
  var diemMon2 = document.getElementById("diem-mon2").value * 1;
  var diemMon3 = document.getElementById("diem-mon3").value * 1;
  var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

  //kiểm tra 3 mon có điểm 0
  if (diemMon1 <= 0 || diemMon2 <= 0 || diemMon3 <= 0) {
    var ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
  } else if (diemChuan < tongDiem) {
    var ketQua = "Bạn đã đậu. Tổng điểm: " + tongDiem;
  } else {
    var ketQua = "Bạn đã rớt. Tổng điểm: " + tongDiem;
  }

  document.getElementById("resul").innerHTML = `${ketQua} `;
  console.log(ketQua, diemMon1, diemMon2, diemMon3, khuVuc);
}

// end bai 1

// Bai 2

// kiểm tra so kw đã dùng
function tinhTienDienTheoKW(soKW) {
  var soTien = 0;
  if (soKW <= 0) {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  } else if (soKW > 0 && soKW <= 50) {
    soTien = 500 * soKW;
  } else if (soKW > 50 && soKW <= 100) {
    soTien = 500 * 50 + (soKW - 50) * 650;
  } else if (soKW > 100 && soKW <= 200) {
    soTien = 1150 * 50 + (soKW - 100) * 850;
  } else if (soKW > 200 && soKW <= 300) {
    soTien = 1150 * 50 + 100 * 850 + (soKW - 200) * 1100;
  } else if (soKW > 300) {
    soTien = 1150 * 50 + 100 * 1950 + (soKW - 300) * 1300;
  }
  return soTien;
}

function tinhTienDien() {
  var soKW = document.getElementById("so-kw").value * 1;
  var hoTen = document.getElementById("ho-ten").value;
  // hàm tinh tiền điện theo số kw dùng
  var tienDienTheoKW = tinhTienDienTheoKW(soKW);

  // format hiên thị tiền
  var formatCurrent = new Intl.NumberFormat("vn-VN").format(tienDienTheoKW);

  // in ra màn hình
  document.getElementById(
    "resul"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${formatCurrent} VND `;
  console.log({ hoTen, soKW, tienDienTheoKW });
}

// end bai 2

// bài 3
//tính thuế phải đóng
function tinhTienThue(tienThuNhap, soNguoiPhuThuoc) {
  var tienThue = 0;
  var thuNhapChiuThue = tienThuNhap - 4e6 - soNguoiPhuThuoc * 1.6e6;

  if (thuNhapChiuThue < 0) {
    alert("Số tiền thu nhập không hợp lệ");
  } else if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60e6) {
    tienThue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60e6 && thuNhapChiuThue <= 120e6) {
    tienThue = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
  } else if (thuNhapChiuThue > 120e6 && thuNhapChiuThue <= 210e6) {
    tienThue = 60e6 * 0.05 + 60e6 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue > 210e6 && thuNhapChiuThue <= 384e6) {
    tienThue =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue > 384e6 && thuNhapChiuThue <= 624e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 374e6) * 0.25;
  } else if (thuNhapChiuThue > 624e6 && thuNhapChiuThue <= 960e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624e6) * 0.3;
  } else if (thuNhapChiuThue > 960e6) {
    tienThue =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960e6) * 0.35;
  }
  return tienThue;
}

function tinhThueThuNhapCaNhan() {
  var hoTen = document.getElementById("ho-ten-thue").value;
  var tongThuNhap = document.getElementById("tong-thu-nhap").value * 1;
  var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1;

  // hàm tính tiền thuế
  var tienThuePhaiDong = tinhTienThue(tongThuNhap, soNguoiPhuThuoc);

  // quy đổi tiền sang VND
  var formatCurrent = new Intl.NumberFormat("vn-VN").format(tienThuePhaiDong);

  document.getElementById(
    "resul"
  ).innerHTML = `Họ tên: ${hoTen}; Tiền thuế thu nhập cá nhân: ${formatCurrent} VND `;
  console.log({ hoTen, tongThuNhap, soNguoiPhuThuoc, formatCurrent });
}

// end bài 3

// bài 4 tính tiền cáp

// hàm onchange ẩn hiện số kết nối
function handleCustomerType() {
  var loaiKhachHang = document.getElementById("loai-khach-hang").value;
  var divConnect = document.getElementById("label-connect");

  if (loaiKhachHang === "doanh-nghiep") {
    divConnect.style.display = "block";
  } else {
    divConnect.style.display = "none";
  }
}

// tính tiền cáp theo loại khách hàng
function tinhTienCapTheoLoaiKhachHang(loaiKhachHang, soKenhCaoCap, soKetNoi) {
  var tienCap = 0;
  var phiHoaDonNhaDan = 4.5;
  var phiHoaDonDoanhNghiep = 15;

  if (loaiKhachHang == "") {
    alert("Hãy chọn loại khách hàng");
  } else if (loaiKhachHang == "nha-dan") {
    tienCap = phiHoaDonNhaDan + 20.5 + soKenhCaoCap * 7.5;
  } else if (loaiKhachHang == "doanh-nghiep") {
    if (soKetNoi <= 10) {
      tienCap = phiHoaDonDoanhNghiep + 75 + soKenhCaoCap * 50;
    } else if (soKetNoi > 10) {
      tienCap =
        phiHoaDonDoanhNghiep + 75 + (soKetNoi - 10) * 5 + soKenhCaoCap * 50;
    }
  }
  return tienCap;
}

// hàm tính tiền cáp
function tinhTienCap() {
  var loaiKhachHang = document.getElementById("loai-khach-hang").value;
  var maKhachHang = document.getElementById("ma-khach-hang").value;
  var soKenhCaoCap = document.getElementById("so-kenh-cao-cap").value * 1;
  var soKetNoi = document.getElementById("so-ket-noi").value * 1;

  //  hàm tính tiền cáp
  var tienCap = tinhTienCapTheoLoaiKhachHang(
    loaiKhachHang,
    soKenhCaoCap,
    soKetNoi
  );

  // format tièn
  var formatCurrent = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(tienCap);

  // hiện kết quả
  document.getElementById(
    "resul"
  ).innerHTML = `Mã khách hàng: ${maKhachHang}, Tiền cáp: ${formatCurrent}`;

  console.log({
    loaiKhachHang,
    maKhachHang,
    soKenhCaoCap,
    soKetNoi,
    formatCurrent,
  });
}
// end bài 4
