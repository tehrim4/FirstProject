//& http://localhost:3000/users
//! fetching users data:

let fetchData = async () => {
    let data = await window.fetch("http://localhost:3000/users");
    let finalData = await data.json();
    let tbody = document.querySelector("tbody");
    finalData.forEach((v, i) => {
        let { id, username, name, phone, email} = v;
        tbody.innerHTML += `
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>
        <button>Read</button>
        <button>Update</button>
        <button>Delete</button>
        </td>
        </tr>
        `;
    });
};

fetchData();

//! display and hide users form.

let d1 = document.querySelector(".form-container-add");
let s1 = document.querySelector(".add-user");
let closeBtn = document.querySelector(".fa-x");

s1.addEventListener("click", (e) => {
    d1.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
    d1.style.display = "none";
});