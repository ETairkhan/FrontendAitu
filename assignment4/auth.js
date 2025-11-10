// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize storage if not exists
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }

    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        // Show logout button if available
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.style.display = 'block';
        }
    }
});

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Get the return URL from localStorage or use default
        const returnUrl = localStorage.getItem('returnUrl') || 'Yeraly/Mainpage.html';
        localStorage.removeItem('returnUrl'); // Clear the return URL
        window.location.href = returnUrl;
    } else {
        alert('Invalid email or password');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users'));
    if (users.some(u => u.email === email)) {
        alert('Email already registered');
        return;
    }

    users.push({
        fullname,
        email,
        password,
        createdAt: new Date().toISOString()
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully!');
    window.location.href = 'login.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    // Store current page as return URL
    localStorage.setItem('returnUrl', window.location.pathname);
    window.location.href = '/login.html';
}

// Function to check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
}

// Function to get current user
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}