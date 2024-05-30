function buyProduct(event){
    event.preventDefault();
    const product = event.target.closest('.product');
    const cat = product.getAttribute('data-cat');
    const name = product.getAttribute('data-name');
    const price = product.getAttribute('data-price');
    const image = product.getAttribute('data-image');
    window.location.href = `order.html?cat=${encodeURIComponent(cat)}&name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
}
function formatNumber(value) {
    return value.toLocaleString('vi-VN');
}

document.addEventListener('DOMContentLoaded', function() {
    var priceElements = document.querySelectorAll('.product-price');
    priceElements.forEach(function(priceElement) {
        var price = parseInt(priceElement.textContent);
        priceElement.textContent = formatNumber(price);
    });
});

document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault()
    const inputmail = document.getElementById('email-input')
    const telinput = document.getElementById('tel-input')
    const nameinput=document.getElementById('name')
    const messinput=document.getElementById('mess')
    const email=inputmail.value
    const phoneNumber=telinput.value
    let isvalid=true
    if(validateEmail(email)){
        inputmail.style.border= '1px solid white';
    }
    else {
        inputmail.style.border= '1px solid red';
        isvalid=false
    }
    if(validatePhoneNumber(phoneNumber)){
        telinput.style.border= '1px solid white';

    }
    else{
        telinput.style.border= '1px solid red';
        isvalid=false
    }
    if(isvalid==true){
        alert("Đã gửi thông tin thành công")
        inputmail.value=''
        telinput.value=''
        nameinput.value=''
        messinput.value=''
    }
})
function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    // Biểu thức chính quy để kiểm tra số điện thoại 10 chữ số bắt đầu bằng số 0
    const phoneRegex = /^0\d{9}$/;
    return phoneRegex.test(phoneNumber);
}
