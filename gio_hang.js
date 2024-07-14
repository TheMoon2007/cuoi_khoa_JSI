document.addEventListener("DOMContentLoaded", function () {
    loadCart();
});

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let sp = document.getElementById('sp');
    let tongGia = 0 ;

    cart.forEach((item, index) => {
        let tr = document.createElement('tr');

        let tdName = document.createElement('td');
        tdName.textContent = item.name;
        tr.appendChild(tdName);

        let tdTien = document.createElement('td');
        tdTien.textContent = item.price + ' VND';
        tr.appendChild(tdTien);
        
        tongGia += parseFloat(item.price);

        let tdXoa = document.createElement('td');
        let btnXoa = document.createElement('button');
        btnXoa.textContent = 'Xóa';
        btnXoa.onclick = function () {
            removeItem(index);
        };
        tdXoa.appendChild(btnXoa);
        tr.appendChild(tdXoa);

        sp.appendChild(tr);

    });
    
    document.getElementById('tong_gia').textContent = tongGia + ' VND';
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // Refresh the page to update the cart
}
