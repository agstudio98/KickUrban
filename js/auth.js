const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

function showLogin() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
}

function showSignup() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
}

// Event Listeners
loginTab.addEventListener('click', showLogin);
signupTab.addEventListener('click', showSignup);
toSignup.addEventListener('click', showSignup);
toLogin.addEventListener('click', showLogin);

// Prevent actual form submission for this prototype
[loginForm, signupForm].forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('La lógica de autenticación se implementaría aquí en una aplicación real.');
    });
});
