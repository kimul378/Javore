document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    if (!username) {
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'You do not have access. Please login first.',
            timer: 3000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'login.html';
        });
    } else {
        document.getElementById('username').textContent = username;
    }

    document.getElementById('logout').addEventListener('click', function () {
        localStorage.removeItem('username');
        Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'You have been logged out successfully',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = 'login.html';
        });
    });
});
