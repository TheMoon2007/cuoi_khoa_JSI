document.addEventListener("DOMContentLoaded", function () {
    let currentUser=JSON.parse(localStorage.getItem("currentUser"));
    if(!currentUser || currentUser.role!=="admin")  
    {
        window.location.href="./trang_chu.html"
    }
    loadUsers();
});

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
    
function loadUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userTableBody = document.getElementById('bang_ten');
    userTableBody.innerHTML = '';

    users.forEach((user, index) => {
        let tr = document.createElement('tr');

        let tdIndex = document.createElement('td');
        tdIndex.textContent = index + 1;
        tr.appendChild(tdIndex);

        let tdUsername = document.createElement('td');
        tdUsername.textContent = user.username;
        tr.appendChild(tdUsername);

        let tdEmail = document.createElement('td');
        tdEmail.textContent = user.email;
        tr.appendChild(tdEmail);

        let tdPhone = document.createElement('td');
        tdPhone.textContent = user.phone;
        tr.appendChild(tdPhone);

        let tdGender = document.createElement('td');
        tdGender.textContent = user.gioi_tinh;
        tr.appendChild(tdGender);

        let tdPassword = document.createElement('td');
        tdPassword.textContent = user.password;
        tr.appendChild(tdPassword);

        let tdRole = document.createElement('td');
        tdRole.textContent = user.role;
        tr.appendChild(tdRole)

        let tdActions = document.createElement('td');
        
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Chỉnh Sửa';
        btnEdit.className = 'edit';
        btnEdit.onclick = function () {
            editUser(index);
        };
        tdActions.appendChild(btnEdit);

        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Xóa';
        btnDelete.className = 'delete';
        btnDelete.onclick = function () {
            deleteUser(index);
        };
        tdActions.appendChild(btnDelete);

        tr.appendChild(tdActions);
        userTableBody.appendChild(tr);
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    loadUsers(); // Refresh the table
}

function editUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users[index];
    
    let thongTin = document.querySelector('.thong_tin');
    thongTin.innerHTML = `
        <h2>Chỉnh Sửa Thông Tin Người Dùng</h2>
        <label>Tài khoản: <input type="text" id="editUsername" value="${user.username}"></label><br>
        <label>Email: <input type="text" id="editEmail" value="${user.email}"></label><br>
        <label>Số điện thoại: <input type="text" id="editPhone" value="${user.phone}"></label><br>
        <label>Giới tính: <input type="text" id="editGender" value="${user.gioi_tinh}"></label><br>
        <label>Mật khẩu: <input type="text" id="editPassword" value="${user.password}"></label><br>
        <label>Role: <input type="text" id="editRole" value="${user.role}"></lable><br>
        <button onclick="saveUser(${index})">Lưu</button>
    `;
}

function saveUser(index) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    users[index].username = document.getElementById('editUsername').value;
    users[index].email = document.getElementById('editEmail').value;
    users[index].phone = document.getElementById('editPhone').value;
    users[index].gioi_tinh = document.getElementById('editGender').value;
    users[index].password = document.getElementById('editPassword').value;
    users[index].role = document.getElementById('editRole').value

    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();

    document.querySelector('.thong_tin').innerHTML = '';
}
