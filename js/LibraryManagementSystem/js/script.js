// Sample Books
if(!localStorage.getItem("books")){
    const books = [
        {id:1,title:"The Great Gatsby",author:"F. Scott Fitzgerald",category:"Fiction",status:"Available"},
        {id:2,title:"A Brief History of Time",author:"Stephen Hawking",category:"Science",status:"Available"},
        {id:3,title:"Sapiens",author:"Yuval Noah Harari",category:"History",status:"Available"}
    ];
    localStorage.setItem("books", JSON.stringify(books));
}

// Signup
function signup(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let cpass=document.getElementById("cpassword").value;

    if(name===""||email===""||pass===""||cpass===""){
        alert("All fields required");
        return;
    }

    if(pass!==cpass){
        alert("Passwords do not match");
        return;
    }

    localStorage.setItem("user", JSON.stringify({name,email,pass}));
    alert("Signup successful!");
    window.location="login.html";
}

// Login
function login(){
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let user=JSON.parse(localStorage.getItem("user"));

    if(user && user.email===email && user.pass===pass){
        localStorage.setItem("loggedIn", true);
        alert("Login successful");
        window.location="index.html";
    }else{
        alert("Invalid credentials");
    }
}

// Logout
function logout(){
    localStorage.removeItem("loggedIn");
    window.location="login.html";
}

// Display Books
function loadBooks(){
    let books=JSON.parse(localStorage.getItem("books"));
    let output="";
    books.forEach(book=>{
        output+=`
        <div class="card">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Status:</strong> ${book.status}</p>
            ${book.status==="Available"
                ? `<button class="btn-primary" onclick="issueBook(${book.id})">Issue</button>`
                : `<button disabled>Issued</button>`}
        </div>`;
    });
    document.getElementById("bookList").innerHTML=output;
}

// Issue Book
function issueBook(id){
    let books=JSON.parse(localStorage.getItem("books"));
    let issued=JSON.parse(localStorage.getItem("issued"))||[];

    books.forEach(book=>{
        if(book.id===id){
            book.status="Issued";
            issued.push({...book, date:new Date().toLocaleDateString()});
        }
    });

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issued", JSON.stringify(issued));
    loadBooks();
}

// Load Issued
function loadIssued(){
    let issued=JSON.parse(localStorage.getItem("issued"))||[];
    let output="";

    if(issued.length===0){
        output="<p>No books issued</p>";
    }

    issued.forEach((book,index)=>{
        output+=`
        <div class="card">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p><strong>Issued On:</strong> ${book.date}</p>
            <button class="btn-danger" onclick="returnBook(${index},${book.id})">Return</button>
        </div>`;
    });

    document.getElementById("issuedList").innerHTML=output;
}

// Return Book
function returnBook(index,id){
    let books=JSON.parse(localStorage.getItem("books"));
    let issued=JSON.parse(localStorage.getItem("issued"));

    books.forEach(book=>{
        if(book.id===id){
            book.status="Available";
        }
    });

    issued.splice(index,1);

    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issued", JSON.stringify(issued));
    loadIssued();
}