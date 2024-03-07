let test = (sum) => {
    if(sum <0 || sum > 10){
        alert('Nhập lại đi pạn eiiii!!!!!');
        return false ; 
    }
    if(sum < 5) return'D yêu nhiều quá nên yếu đúng hôn' ; 
    else if (sum < 7) return 'C hơi kém nho ' ; 
    else if (sum < 8) return  'B cũng tạm ổn nè !!' ; 
    else if (sum < 9) return 'A Pạn thật tuyệt vơi!!!' ;
}


const frmGetdiem = document.forms.frmGetdiem;
console.log('frmGetdiem');
frmGetdiem.addEventListener('submit', (e) => {
    let ten = document.getElementById('ten').value;
    let LT = parseFloat(document.getElementById('LT').value);
    let TH = parseFloat(document.getElementById('TH').value);
    let THI = parseFloat(document.getElementById('THI').value);

    let trem = document.getElementById('trem');
    const currentDate = new Date();

    // var sum = (LT + TH + THI) / 3;

    // LT =isNaN(LT)?-1:LT
    
    if ( ten == '' ) {
        alert('Vui lòng nhập Tên của pạn .');
    } 
    else if (isNaN(LT) ) {
        alert('Vui lòng nhập vào các giá trị số cho Lý Thuyết');
    } 
    else if(isNaN(TH)){
         alert('Vui lòng nhập vào các giá trị số cho Thực Hành');
    }
    else if(isNaN(THI)){
        alert('Vui lòng nhập vào các giá trị số cho Thực Hành');
   }
    else {
        var sum = (LT + TH + THI) / 3;
        console.log(test(sum));
    }
    if (test(sum) != false){
        trem.innerHTML  =   `
        <h1>Điểm của : ${ten} </h1>
        <h3>Điểm trung bình : ${sum}</h3>
        <h3>Xếp loại : ${test(sum)}</h3>
        <h3>Ngày nhận kết quả : ${currentDate} </h3>
        `
    }   
    e.preventDefault();
});
