let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    let tienVay = document.querySelector('#tienVay').value;
    let laiSuatHangNam = document.querySelector('#laiSuatHangNam').value;
    let thoiGianTraNam = document.querySelector('#thoiGianTraNam').value;

    if(tienVay == '' || laiSuatHangNam == ''|| thoiGianTraNam == ''){
        alert('vui lòng không để ô trống');
        return;
    }

    //đổi lãi suất hàng năm thành lãi suất theo tháng
    laiSuatHangNam = laiSuatHangNam / 100;

    //laiSuatHangNam = laiSuatHangNam.toFixed(2);

    let laiSuatHangThang = laiSuatHangNam / 12;
    
    //thời gian trả theo tháng
    thoiGianTraThang = thoiGianTraNam * 12;

    // số tiền phải trả hàng tháng

    //let tienLaiPhaiTraHangThang = (tienVay / thoiGianTraThang) + ((tienVay *thoiGianTraThang)/(100*12))

    let soTienTraHangThang = document.querySelector('#soTienTraHangThang');

    soTienTraHangThang =  (tienVay / thoiGianTraThang) + (tienVay * laiSuatHangThang);

    console.log('soTienTraHangThang',soTienTraHangThang);
    document.querySelector('#soTienTraHangThang').value = soTienTraHangThang;

    // tổng số tiền phải trả
    let tongSoTienPhaiTra = document.querySelector('#tongSoTienPhaiTra');

    tongSoTienPhaiTra = soTienTraHangThang * thoiGianTraThang;

    console.log('tongSoTienPhaiTra', tongSoTienPhaiTra)

    document.querySelector('#tongSoTienPhaiTra').value = tongSoTienPhaiTra;

    //số lãi phải trả 
    let tongSoLaiPhaiTra = document.querySelector('#tongSoLaiPhaiTra');

    tongSoLaiPhaiTra = tongSoTienPhaiTra - tienVay;

    console.log('tongSoLaiPhaiTra', tongSoLaiPhaiTra)

    document.querySelector('#tongSoLaiPhaiTra').value = tongSoLaiPhaiTra;

    console.log('thoiGianTraThang', thoiGianTraThang);
    console.log('laiSuatHangThang', laiSuatHangThang);
    
});