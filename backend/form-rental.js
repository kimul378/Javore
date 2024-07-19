document.getElementById('rental-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch('http://localhost:3000/api/data_rental', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        Swal.fire({
            title: 'Success!',
            text: 'Data added successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Failed to add data',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});
