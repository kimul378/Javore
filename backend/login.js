document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Perform login validation here
        if (email === 'admin@javore.com' && password === 'javore') {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome back!',
                timer: 1500,
                showConfirmButton: false
            }).then(() => {
                localStorage.setItem('username', email);
                window.location.href = 'index.html';
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password'
            });
        }
    });

    // Handle Forgot Password link
    document.querySelector('.forgot-password').addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Forgot Password?',
            text: 'Forgot Password feature is not available yet.'
        });
    });

    // Handle Signup Here link
    document.querySelector('.signup-link').addEventListener('click', function (e) {
        e.preventDefault();
        Swal.fire({
            icon: 'info',
            title: 'Signup Here',
            text: 'Signup feature is not available yet.'
        });
    });
});
