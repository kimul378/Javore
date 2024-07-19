document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Fetch data wisata
    const response = await fetch(`http://localhost:3000/api/data_wisata/${id}`);
    const data = await response.json();
    const detailContent = document.getElementById('detail-content');

    // Create elements to display data
    const tourismTitle = document.createElement('h2');
    tourismTitle.textContent = data.nama_wisata;

    const tourismImage = document.createElement('img');
    tourismImage.src = `http://localhost:3000/uploads/${data.foto_wisata}`;
    tourismImage.alt = data.nama_wisata;
    tourismImage.style.maxWidth = '100%'; // Adjust image style as needed

    const kota = document.createElement('p');
    kota.textContent = `Kota: ${data.kota}`;

    // const tourismRating = document.createElement('p');
    // tourismRating.textContent = `Rating: ${data.rating_wisata}`;

    const tourismDescription = document.createElement('p');
    tourismDescription.textContent = data.deskripsi_wisata;

    const travelPlan = document.createElement('p');
    travelPlan.textContent = `Travel Plan: ${data.travel_plan}`;

    const day1 = document.createElement('p');
    day1.textContent = `Day 1: ${data.day1}`;

    const day2 = document.createElement('p');
    day2.textContent = `Day 2: ${data.day2}`;

    const day3 = document.createElement('p');
    day3.textContent = `Day 3: ${data.day3}`;

    const tourismLocation = document.createElement('iframe');
    tourismLocation.src = data.link_maps;
    tourismLocation.width = "100%";
    tourismLocation.height = "300";
    tourismLocation.style.border = "0";

    // Append elements to detailContent
    detailContent.appendChild(tourismTitle);
    detailContent.appendChild(tourismImage);
    detailContent.appendChild(kota);
    // detailContent.appendChild(tourismRating);
    detailContent.appendChild(tourismDescription);
    detailContent.appendChild(travelPlan);
    detailContent.appendChild(day1);
    detailContent.appendChild(day2);
    detailContent.appendChild(day3);
    detailContent.appendChild(tourismLocation);

    // Fetch reviews data based on wisata_id
    const reviewsResponse = await fetch(`http://localhost:3000/api/reviews/${id}`);
    const reviewsData = await reviewsResponse.json();

    // Calculate the average rating and star counts
    const totalReviews = reviewsData.length;
    const ratingSum = reviewsData.reduce((sum, review) => sum + review.rating_pengguna, 0);
    const averageRating = totalReviews > 0 ? (ratingSum / totalReviews).toFixed(1) : '0.0';
    
    const starCounts = [0, 0, 0, 0, 0];
    reviewsData.forEach(review => {
        starCounts[review.rating_pengguna - 1]++;
    });

    // Create the review summary section
    const reviewSummary = document.createElement('div');
    reviewSummary.classList.add('review-summary');
    
    const averageRatingElem = document.createElement('div');
    averageRatingElem.classList.add('average-rating');
    averageRatingElem.innerHTML = `
        <span class="average-rating-value">${averageRating}</span>
        <div class="stars">
            ${'<span class="star">&#9733;</span>'.repeat(Math.floor(averageRating))}
            ${(averageRating % 1 !== 0) ? '<span class="star">&#9734;</span>' : ''}
        </div>
        <span class="total-reviews">(${totalReviews} Reviews)</span>
    `;

    const starBars = document.createElement('div');
    starBars.classList.add('star-bars');
    starCounts.forEach((count, index) => {
        const percentage = ((count / totalReviews) * 100).toFixed(1);
        // Corrected order of elements: filled-bar first, then bar
        starBars.innerHTML += `
            <div class="star-bar">
                <span>${1 + index} stars</span>
                <div class="bar">
                    <div class="filled-bar" style="width: ${percentage}%"></div>
                </div>
                <span>${count}</span>
            </div>
        `;
    });

    reviewSummary.appendChild(averageRatingElem);
    reviewSummary.appendChild(starBars);


    // Append reviewSummary to detailContent
    detailContent.appendChild(reviewSummary);

    // Container for reviews
    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews-container');

    // Loop to display each review
    reviewsData.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.classList.add('review-card');

        const reviewerName = document.createElement('p');
        reviewerName.classList.add('reviewer-name');
        reviewerName.textContent = `${review.reviewer_name}`;
        
        const ratingPengguna = document.createElement('p');
        ratingPengguna.classList.add('rating-pengguna');
        ratingPengguna.innerHTML = `${getStarRating(review.rating_pengguna)}`;

        const reviewText = document.createElement('p');
        reviewText.classList.add('review-text');
        reviewText.textContent = review.review_text;

        

        // Append elements to reviewCard
        reviewCard.appendChild(reviewerName);
        reviewCard.appendChild(ratingPengguna);
        reviewCard.appendChild(reviewText);
        

        // Append reviewCard to reviewsContainer
        reviewsContainer.appendChild(reviewCard);
    });
    // Function to get star rating HTML based on the given rating
    function getStarRating(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '&#9733;'; // Full star
            } else {
                starsHTML += '&#9734;'; // Empty star
            }
        }
        return starsHTML;
    }
    // Append reviewsContainer to detailContent
    detailContent.appendChild(reviewsContainer);

    // Add form for new review
    const reviewForm = document.createElement('form');
    reviewForm.classList.add('review-form');
    reviewForm.innerHTML = `
        <h3>Submit a Review</h3>
        <label for="reviewerName">Your Name:</label>
        <input type="text" id="reviewerName" name="reviewerName" required>
        
        <label for="reviewText">Review:</label>
        <textarea id="reviewText" name="reviewText" required></textarea>
        
        <label for="reviewRating">Rating:</label>
        <select id="reviewRating" name="reviewRating" required>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
        </select>
        
        <button type="submit">Submit Review</button>
    `;
    
    reviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const newReview = {
            reviewer_name: e.target.reviewerName.value,
            review_text: e.target.reviewText.value,
            rating_pengguna: parseInt(e.target.reviewRating.value),
            wisata_id: id
        };

        const response = await fetch('http://localhost:3000/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        });

        if (response.ok) {
            Swal.fire({
                title: 'Success!',
                text: 'Review successfully added',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.reload();
            });
            reviewForm.reset();
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add review',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });

    detailContent.appendChild(reviewForm);
});
