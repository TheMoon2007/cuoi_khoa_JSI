var slideIndex = 0;
    showSlides();

    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000);}

    // let product = [
    //     {
    //     id:"1",
    //     img:"https://hocmai.vn/course/images/pen-c-tieng-anh-1649866283.png",
    //     name:"PEN-C Tiếng Anh",
    //     price:"5000000",            },
    //     {
    //         id:"2",
    //         img:"https://mshoagiaotiep.com/uploads/images/userfiles/2019/12/khoa_hoc_online_mshoa.jpg",
    //         name:"Học tại gia",
    //         price:"6000000",
    //     },
    //     {
    //         id:"3",
    //         img:"https://website-dev.hn.ss.bfcplatform.vn/Banner_website_art_c1adb6e555.png",
    //         name:"Khóa học công nghệ mỹ thuật số",
    //         price:"5000000",
    //     },
    //     {
    //         id:"4",
    //         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMMTlCVnhLRCcr4QWYg33YJqM8L9SdRdWGg&s",
    //         name:"Khóa học công nghê robotics",
    //         price:"5000000",
    //     },
    //     {
    //         id:"5",
    //         img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPkpcX756CF8NJpJqL1CWjSQIekq1Jb8hYw&sg",
    //         name:"Khóa học công nghệ lập trình",
    //         price:"5000000",
    //     },
    //     {
    //         id:"6",
    //         img:"https://website-dev.hn.ss.bfcplatform.vn/Blog_02_0f86ad2158.jpg",
    //         name:"Khóa học Art",
    //         price:"5000000",
    //     },
    //     {
    //         id:"7",
    //         img:"https://website-dev.hn.ss.bfcplatform.vn/large_Artboard_1_copy_2_efd4beff29.png",
    //         name:"Khóa học lập trình Web    ",
    //         price:"5000000",
    //     },
    //     {
    //         id:"8",
    //         img:"https://hocmai.vn/course/images/pen-c-tieng-anh-1649866283.png",
    //         name:"PEN-C Tiếng Anh",
    //         price:"5000000",
    //     },
    //     {
    //         id:"9",
    //         img:"https://hocmai.vn/course/images/pen-c-tieng-anh-1649866283.png",
    //         name:"PEN-C Tiếng Anh",
    //         price:"5000000",
    //     },
    //     {
    //         id:"10",
    //         img:"https://hocmai.vn/course/images/pen-c-tieng-anh-1649866283.png",
    //         name:"PEN-C Tiếng Anh",
    //         price:"5000000",
    //     },
    const currentUser= JSON.parse(localStorage.getItem("currentUser"));
    if(currentUser)
    {
        document.getElementById("login").style.display="none";
        document.getElementById("resgiter").style.display="none";
        document.getElementById("nameUser").innerText=currentUser.username;
    }
    else
    {
        document.getElementById("nameUser").style.display="none";
    }
    let product = JSON.parse(localStorage.getItem("product")) || products;
        for (let items of product) {

            let card = document.createElement("div");
            card.classList.add("card");
            card.id = items.id;

            let img_sp1 = document.createElement("div");
            img_sp1.classList.add("img_sp1");

            let image = document.createElement("img");
            image.setAttribute("src", items.img);
            img_sp1.appendChild(image);
            card.appendChild(img_sp1);

            let container_sp1 = document.createElement("div");
            container_sp1.classList.add("container_sp1");

            let name = document.createElement("p");
            name.classList.add("name_sp1");
            name.innerHTML = items.name;
            container_sp1.appendChild(name);

            let price = document.createElement("p");
            price.classList.add("gia_sp1");
            price.innerHTML = "Price: " + items.price;
            container_sp1.appendChild(price);

            let btn = document.createElement("button");
            btn.innerHTML = "Thêm vào giỏ hàng";
            btn.addEventListener("click", function() {
                addToCart(items);
            });
            container_sp1.appendChild(btn);

            card.appendChild(container_sp1);
            document.getElementById("sp1").appendChild(card);
        }

        function addToCart(item) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(item.name + " đã được thêm vào giỏ hàng");
        }

        document.getElementById("SaveProduct").addEventListener("click", function() {
            localStorage.setItem("product", JSON.stringify(product));
            alert("Lưu thành công");
        });
        
        function createCard() {
            let products = JSON.parse(localStorage.getItem("product"));
            let listCard = document.getElementById("listCard");
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                let card = `<div class="card">
                    <img src="${product.img}" alt="Product Image" style="width:100%">
                    <h1>${product.name}</h1>
                    <p class="price">${product.price}</p>
                    <p>Some text about the product.</p>
                    <p><button>Add to Cart</button></p>
                </div>`;
            }
        }

        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                let id = this.id;
                window.location.href = `./chi_tiet_sp.html?id=${id}`;
            });
        });

        createCard();

        function dangxuat() {
            localStorage.removeItem("currentUser");
            window.location.href="./login.html";
        }