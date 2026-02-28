// LOGIN STATUS 
function checkLoginStatus() {
    const user = localStorage.getItem("loggedInUser");
    const loginLink = document.getElementById("loginLink");
    const signupLink = document.getElementById("signupLink");
    const logoutBtn = document.getElementById("logoutBtn");

    if (user) {
        if (loginLink) loginLink.style.display = "none";
        if (signupLink) signupLink.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline";
    } else {
        if (logoutBtn) logoutBtn.style.display = "none";
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", checkLoginStatus);

// SIGNUP 
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = fullName.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirm = confirmPassword.value;
        const phone = phoneInput.value.trim();

        if (!name || !email || !password || !confirm || !phone) {
            alert("All fields required");
            return;
        }

        if (password !== confirm) {
            alert("Passwords do not match");
            return;
        }

        const user = { name, email, password, phone };
        localStorage.setItem("user_" + email, JSON.stringify(user));

        alert("Registration successful!");
        window.location.href = "login.html";
    });
}

// LOGIN 
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = loginEmail.value.trim();
        const password = loginPassword.value;

        const storedUser = JSON.parse(localStorage.getItem("user_" + email));

        if (!storedUser || storedUser.password !== password) {
            alert("Invalid credentials");
            return;
        }

        localStorage.setItem("loggedInUser", email);
        window.location.href = "index.html";
    });
}

//DOCTORS 
const doctors = [
    { name: "Dr. Anjali", specialization: "Cardiology", exp: "10 Years", available: "Yes" },
    { name: "Dr. Mahesh", specialization: "Dermatology", exp: "7 Years", available: "No" },
    { name: "Dr. Lilly", specialization: "Pediatrics", exp: "12 Years", available: "Yes" }
];

function loadDoctors() {
    const container = document.getElementById("doctorList");
    if (!container) return;

    container.innerHTML = "";
    doctors.forEach(doc => {
        container.innerHTML += `
            <div class="doctor-card">
                <h3>${doc.name}</h3>
                <p><strong>Specialization:</strong> ${doc.specialization}</p>
                <p><strong>Experience:</strong> ${doc.exp}</p>
                <p><strong>Available:</strong> ${doc.available}</p>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", loadDoctors);

// APPOINTMENTS
const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById("patientName").value = loggedInUser;
    }

    appointmentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const appointment = {
            patient: patientName.value,
            doctor: doctorSelect.value,
            date: appointmentDate.value,
            reason: reason.value
        };

        if (!appointment.doctor || !appointment.date) {
            alert("All fields required");
            return;
        }

        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        appointments.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment booked!");
        loadAppointments();
    });
}

function loadAppointments() {
    const table = document.getElementById("appointmentTable");
    if (!table) return;

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    table.innerHTML = "";

    appointments.forEach((appt, index) => {
        table.innerHTML += `
            <tr>
                <td>${appt.patient}</td>
                <td>${appt.doctor}</td>
                <td>${appt.date}</td>
                <td>${appt.reason}</td>
                <td><button onclick="cancelAppointment(${index})">Cancel</button></td>
            </tr>
        `;
    });
}

function cancelAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
}

document.addEventListener("DOMContentLoaded", loadAppointments);