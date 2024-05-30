  
        function getQueryParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                cat:   params.get('cat'),
                name:  params.get('name'),
                price: params.get('price'),
                image: params.get('image')
            };
        }

        const productInfo = getQueryParams();
        if (productInfo.cat && productInfo.name && productInfo.price && productInfo.image) {
            document.getElementById('product-cat').textContent=productInfo.cat;
            document.getElementById('product-name').textContent = productInfo.name;
            document.getElementById('product-price').textContent = productInfo.price;
            document.getElementById('product-image').src = decodeURIComponent(productInfo.image);
            document.getElementById('product-image').alt = productInfo.name;
        } else {
            document.getElementById('order-details').textContent = 'Không có thông tin sản phẩm để hiển thị.';
        }


        let amountElement = document.getElementById("amount");
        let amount = amountElement.value;
        let render = (amount)=>{
            amountElement.value=amount;
        }
        let handlePlus = () => {
            amount++;
            render(amount);
        }
        let handleMinus = () => {
            if(amount>1)
            amount--;
            render(amount);
        }
        amountElement.addEventListener('input',()=>{
            amount=amountElement.value;
            amount=parseInt(amount);
            amount=(isNaN(amount)||amount==0)?1:amount;
            render(amount);

        })
       

        document.addEventListener('DOMContentLoaded', function() {
            var priceElements = document.querySelectorAll('.product-price');
            priceElements.forEach(function(priceElement) {
                var price = parseInt(priceElement.textContent);
                priceElement.textContent = formatNumber(price);
            });
        });
        function formatNumber(value) {
            return value.toLocaleString('vi-VN');
        }
        function formatCurrency(value) {
            return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace("₫", "VND");
        }

        document.addEventListener('DOMContentLoaded', function() {
            var priceElement = document.getElementById('product-price');
            var price = parseInt(priceElement.textContent);
            priceElement.textContent = formatCurrency(price);
        });
        const priceElement = document.getElementById('product-price');
        const totalPriceElement = document.getElementById('total-price');
        function updateTotalPrice() {
            var price = parseInt(productInfo.price);
            var quantity = parseInt(amountElement.value);
            var totalPrice = price * quantity;
            totalPriceElement.textContent = formatNumber(totalPrice);
        }
        document.addEventListener('DOMContentLoaded', function() {
            updateTotalPrice();
            priceElement.textContent = formatNumber(parseInt(productInfo.price));
        });
        let notifications =document.querySelector('.notifications')
        let success=document.getElementById('success')
        function createToast(type,icon,title,text){
            let newToast =document.createElement('div')
            newToast.innerHTML=`
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
            </div>`;
            notifications.appendChild(newToast);
            newToast.timeOut=setTimeout(()=>newToast.remove(),5000)
        }
        success.onclick=function(){
            let type='success'
            let icon='fa-regular fa-circle-check'
            let title='Success'
            let text='Congratulations on your successful order.'
            createToast(type,icon,title,text)
        }