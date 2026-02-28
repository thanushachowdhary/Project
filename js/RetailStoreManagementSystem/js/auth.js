// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (!name || !email || !password) {
            document.getElementById("message").innerText = "All fields required!";
            return;
        }

        if (password !== confirmPassword) {
            document.getElementById("message").innerText = "Passwords do not match!";
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email, password });

        localStorage.setItem("users", JSON.stringify(users));
        document.getElementById("message").innerText = "Signup successful!";
    });
}
// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", email);
            window.location.href = "index.html";
        } else {
            document.getElementById("loginMessage").innerText = "Invalid credentials!";
        }
    });
}