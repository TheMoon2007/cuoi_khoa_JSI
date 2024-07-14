
document.addEventListener("DOMContentLoaded", function () {
    let currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser || currentUser.role!=="admin")  
    {
        window.location.href="./trang_chu.html"
    }
    loadUsers();
});
document.addEventListener('DOMContentLoaded', () => {
    const addProductBtn = document.getElementById('addProductBtn');
    const productModal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.modal-content .close');
    const productForm = document.getElementById('productForm');
    const productTableBody = document.getElementById('productTableBody');

    let products = JSON.parse(localStorage.getItem('product')) || [];
    addProductBtn.addEventListener('click', () => {
        productForm.reset();
        productForm.setAttribute('data-edit-index', '');
        productModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const product = {
            id: productForm.productId.value,
            name: productForm.productName.value,
            price: productForm.productPrice.value,
        };

        products.forEach(itemProduct => {
            if(itemProduct.id=== product.id){
                itemProduct.name=product.name
                itemProduct.image=product.image
                itemProduct.image=product.image
                itemProduct.price=product.price
                localStorage.setItem("product",JSON.stringify(products));
                alert("cập nhật dữ liệu thành công");
                renderProducts();
                return
            }
        });
        console.log()
    
        products.push(product);
        
        localStorage.setItem('products', JSON.stringify(products));
        productModal.style.display = 'none';
        renderProducts();
    });

    function renderProducts() {
        productTableBody.innerHTML = '';
        console.log(products)
        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td> <img src=${product.img}></td>
                <td>${product.price} VND</td>
                <td>
                    <button onclick="editProduct(${index})">Sửa</button>
                    <button onclick="deleteProduct(${index})">Xóa</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    }
    renderProducts()
    window.editProduct = function(index) {
        const product = products[index];
        productForm.productId.value = product.id;
        productForm.productName.value = product.name;
        productForm.productPrice.value = product.price;
        productModal.style.display = 'flex';
    };
    
    window.deleteProduct = function(index) {
        products.splice(index, 1);
        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
    };
});
