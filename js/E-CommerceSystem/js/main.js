window.onload = function () {
    const loginLink = document.getElementById("loginLink");
    const logoutLink = document.getElementById("logoutLink");

    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {
        if (loginLink) loginLink.style.display = "none";
        if (logoutLink) logoutLink.style.display = "inline";
    }

    if (logoutLink) {
        logoutLink.addEventListener("click", function () {
            localStorage.removeItem("loggedIn");
            alert("Logged out!");
            window.location.href = "index.html";
        });
    }
};