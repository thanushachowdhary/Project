const user = localStorage.getItem("loggedInUser");
const loginLink = document.getElementById("loginLink");
const logoutBtn = document.getElementById("logoutBtn");

if (user) {
  if(loginLink) loginLink.style.display="none";
  if(logoutBtn) logoutBtn.style.display="block";
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", function(){
    localStorage.removeItem("loggedInUser");
    location.reload();
  });
}