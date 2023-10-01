// clear ô input mỗi khi click Thêm số
function clearField(id) {
  document.getElementById(id).value = "";
}

var numberArr = [];
// function thêm số
document.getElementById("themSo").onclick = function () {
  var number = Number(document.getElementById("number").value);
  numberArr.push(number);
  var message = `<p>&#128073; Mảng số đã nhập: ${numberArr}</p>`;
  document.getElementById("chuoiSo").innerHTML = message;
  clearField("number");
};

// 1. Tổng số dương
document.getElementById("btnYeuCau1").onclick = function () {
  var sum = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      sum += numberArr[i];
    }
  }
  document.getElementById(
    "yeuCau1"
  ).innerHTML = `<p>&#128073; Tổng số dương: ${sum}</p>`;
};

// 2. Đếm số dương
document.getElementById("btnYeuCau2").onclick = function () {
  var countPlus = 0;
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      countPlus++;
    }
  }
  document.getElementById(
    "yeuCau2"
  ).innerHTML = `<p>&#128073; Số số dương: ${countPlus}</p>`;
};

// 3. Tìm số nhỏ nhất
document.getElementById("btnYeuCau3").onclick = function () {
  var min = numberArr[0];
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] < min) {
      min = numberArr[i];
    }
  }
  document.getElementById(
    "yeuCau3"
  ).innerHTML = `<p>&#128073; Số nhỏ nhất: ${min}</p>`;
};

// 4. Tìm số dương nhỏ nhất
document.getElementById("btnYeuCau4").onclick = function () {
  var plusNumberArr = numberArr.filter(function (number) {
    return number > 0;
  });
  var min = plusNumberArr[0];
  var tagKetQua = document.getElementById("yeuCau4");
  for (var i = 0; i < plusNumberArr.length; i++) {
    if (plusNumberArr[i] < min) {
      min = plusNumberArr[i];
    }
  }
  if (plusNumberArr.length > 0) {
    tagKetQua.innerHTML = `<p>&#128073; Số dương nhỏ nhất: ${min}</p>`;
  } else tagKetQua.innerHTML = `<p>&#128073; Không có số dương trong mảng</p>`;
};

// 5. Tìm số chẵn cuối cùng
document.getElementById("btnYeuCau5").onclick = function () {
  var evenNumberArr = numberArr.filter(function (number) {
    return number % 2 === 0;
  });
  var tagKetQua = document.getElementById("yeuCau5");
  if (evenNumberArr.length > 0) {
    tagKetQua.innerHTML = `<p>&#128073; Số chẵn cuối cùng: ${
      evenNumberArr[evenNumberArr.length - 1]
    }</p>`;
  } else tagKetQua.innerHTML = `<p>&#128073; Không có số chẵn trong mảng</p>`;
};

// 6. Đổi chỗ
document.getElementById("btnYeuCau6").onclick = function () {
  var viTri1 = Number(document.getElementById("viTri1").value);
  var viTri2 = Number(document.getElementById("viTri2").value);
  var temp = numberArr[viTri1];
  numberArr[viTri1] = numberArr[viTri2];
  numberArr[viTri2] = temp;
  document.getElementById(
    "yeuCau6"
  ).innerHTML = `<p>&#128073; Mảng sau khi đổi: ${numberArr}</p>`;
};

// 7. Sắp xếp tăng dần
document.getElementById("btnYeuCau7").onclick = function () {
  var ascendingArr = numberArr.sort(function (a, b) {
    return a - b;
  });
  console.log(ascendingArr);
  document.getElementById(
    "yeuCau7"
  ).innerHTML = `<p>&#128073; Mảng sau khi sắp xếp: ${ascendingArr}</p>`;
};

// 8. Tìm số nguyên tố đầu tiên
// function check 1 số có là số nguyên tố, đúng return true
function isPrime(number) {
  var checkSoNT = true;
  for (var count = 2; count <= Math.sqrt(number); count++) {
    if (number % count === 0) {
      checkSoNT = false;
      break;
    }
  }
  return checkSoNT;
}

document.getElementById("btnYeuCau8").onclick = function () {
  var soLonHon1Arr = numberArr.filter(function (number) {
    return number > 1;
  });
  var viTriSoNTDauTien;
  var tagKetQua = document.getElementById("yeuCau8");
  for (i = 0; i < soLonHon1Arr.length; i++) {
    if (isPrime(soLonHon1Arr[i]) === true) {
      viTriSoNTDauTien = i;
      break;
    }
  }
  if (viTriSoNTDauTien >= 0) {
    tagKetQua.innerHTML = `<p>&#128073; Số nguyên tố đầu tiên: ${soLonHon1Arr[viTriSoNTDauTien]}</p>`;
  } else {
    tagKetQua.innerHTML = `<p>&#128073; Không có số nguyên tố</p>`;
  }
};

// 9. Đếm số nguyên
// function thêm số
var numberArr9 = [];
document.getElementById("themSo9").onclick = function () {
  var number = Number(document.getElementById("number9").value);
  numberArr9.push(number);
  var message = `<p>&#128073; Mảng số đã nhập: ${numberArr9}</p>`;
  document.getElementById("chuoiSo9").innerHTML = message;
  clearField("number9");
};

// đếm số nguyên
document.getElementById("btnYeuCau9").onclick = function () {
  var integerArr = numberArr9.filter(function (number) {
    return Number.isInteger(number);
  });
  document.getElementById(
    "yeuCau9"
  ).innerHTML = `<p>&#128073; Số số nguyên: ${integerArr.length}</p>`;
};

// 10. So sánh số lượng số âm và dương
document.getElementById("btnYeuCau10").onclick = function () {
  var minusNumberArr = numberArr.filter(function (number) {
    return number < 0;
  });
  var plusNumberArr = numberArr.filter(function (number) {
    return number > 0;
  });
  var soLuongSoAm = minusNumberArr.length;
  var soLuongSoDuong = plusNumberArr.length;
  var message = "";
  if (soLuongSoAm > soLuongSoDuong) {
    message = "Số âm > Số dương";
  } else if (soLuongSoAm < soLuongSoDuong) {
    message = "Số dương > Số âm";
  } else {
    message = "Số âm = Số dương";
  }
  document.getElementById("yeuCau10").innerHTML = message;
};
