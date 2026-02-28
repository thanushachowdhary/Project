//Navbar Login/Logout
function checkLogin() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if(user){
        document.getElementById('loginLink')?.classList.add('hidden');
        document.getElementById('signupLink')?.classList.add('hidden');
        document.getElementById('logoutBtn')?.classList.remove('hidden');
        const welcome = document.getElementById('welcomeUser');
        if(welcome) welcome.innerText = `Welcome, ${user.fullName}`;
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
}

//  Signup
function signup(event){
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;
    const contact = document.getElementById('contact').value.trim();

    if(!fullName || !email || !password || !confirmPassword || !role || !contact){
        alert('Please fill all fields');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert('Invalid email format');
        return;
    }

    if(password !== confirmPassword){
        alert('Passwords do not match');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.some(u => u.email === email)){
        alert('Email already registered');
        return;
    }

    users.push({ fullName, email, password, role, contact, department: '', status: 'Active' });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');
    window.location.href = 'login.html';
}

//  Login
function login(event){
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}

// Employees Page 
function showEmployees(filter=''){
    const tableBody = document.getElementById('employeesTable');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    tableBody.innerHTML = '';

    users.filter(u => u.fullName.toLowerCase().includes(filter.toLowerCase()))
        .forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index+1}</td>
            <td>${user.fullName}</td>
            <td>${user.department}</td>
            <td>${user.role}</td>
            <td>${user.contact}</td>
            <td>${user.status}</td>
            <td>
                <button onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteEmployee(index){
    if(confirm('Are you sure to delete this employee?')){
        let users = JSON.parse(localStorage.getItem('users'));
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        showEmployees();
    }
}

// Attendance 
function markAttendance(employeeIndex, status){
    let attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    const date = new Date().toLocaleDateString();

    // Check if attendance for today exists
    const existing = attendance.find(a => a.date===date && a.index===employeeIndex);
    if(existing){
        existing.status = status;
    } else {
        attendance.push({ date, index: employeeIndex, status });
    }
    localStorage.setItem('attendance', JSON.stringify(attendance));
    displayAttendance();
}

function displayAttendance(){
    const table = document.getElementById('attendanceTable');
    if(!table) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const attendance = JSON.parse(localStorage.getItem('attendance')) || [];
    table.innerHTML = '';

    users.forEach((user, index) => {
        const todayAttendance = attendance.find(a => a.date===new Date().toLocaleDateString() && a.index===index);
        const status = todayAttendance ? todayAttendance.status : '';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullName}</td>
            <td>
                <button onclick="markAttendance(${index}, 'Present')">Present</button>
                <button onclick="markAttendance(${index}, 'Absent')">Absent</button>
            </td>
            <td>${status}</td>
        `;
        table.appendChild(row);
    });
}

// Payroll 
function displayPayroll(){
    const table = document.getElementById('payrollTable');
    if(!table) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const payroll = JSON.parse(localStorage.getItem('payroll')) || [];
    table.innerHTML = '';

    users.forEach((user, index) => {
        let record = payroll[index] || { basic:0, allowance:0, deduction:0 };
        let net = record.basic + record.allowance - record.deduction;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullName}</td>
            <td>${index+1}</td>
            <td><input type="number" value="${record.basic}" onchange="updatePayroll(${index}, 'basic', this.value)"></td>
            <td><input type="number" value="${record.allowance}" onchange="updatePayroll(${index}, 'allowance', this.value)"></td>
            <td><input type="number" value="${record.deduction}" onchange="updatePayroll(${index}, 'deduction', this.value)"></td>
            <td>${net}</td>
        `;
        table.appendChild(row);
    });
}

function updatePayroll(index, field, value){
    let payroll = JSON.parse(localStorage.getItem('payroll')) || [];
    if(!payroll[index]) payroll[index] = { basic:0, allowance:0, deduction:0 };
    payroll[index][field] = Number(value);
    localStorage.setItem('payroll', JSON.stringify(payroll));
    displayPayroll();
}

//  Contact 
function submitContact(event){
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    if(!name || !email || !message){
        alert('Please fill all fields');
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
        alert('Invalid email');
        return;
    }
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
}

// Initialize 
document.addEventListener('DOMContentLoaded', () => {
    checkLogin();
    showEmployees();
    displayAttendance();
    displayPayroll();
});