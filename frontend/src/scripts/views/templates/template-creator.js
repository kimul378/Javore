/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable arrow-parens */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantsDetailTemplate = (restaurant) => `
    <div class="movie__header">
      <h2 tabindex="0" class="movie__title">${restaurant.name}</h2>
      <div id="likeButtonContainer"></div>
    </div>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE + restaurant.pictureId}"
    alt="${restaurant.name}" crossorigin="anonymous"/>
    <div class="movie__info">
      <h3>Information</h3>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <h4>Alamat</h4>
      <p>${restaurant.address}</p>
      <h4>Kategori Restaurant</h4>
      <p>${restaurant.categories.map((item) => item.name).join(' - ')}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
    <div class="movie__overview">
      <h3>Overview</h3>
      <p>${restaurant.description}</p>
    </div>

    <h2 tabindex="0">Menu Makanan</h2>
    <ul id="food-menu">
      ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
    </ul>

    <h2 tabindex="0">Menu Minuman</h2>
    <ul id="drink-menu">
      ${restaurant.menus.drinks.map((drink) => `
        <li>${drink.name}</li>`).join('')}
    </ul>

    <h2 tabindex="0">Customer Reviews</h2>
    <ul id="customer-reviews">
      ${restaurant.customerReviews.map((review) => `
        <li>
          <strong>${review.name}:</strong> 
          ${review.review} - <em>${review.date}</em>
        </li>
      `).join('')}
    </ul>
`;

const createRestaurantsItemTemplate = (restaurant) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${restaurant.name}"
      src="${CONFIG.BASE_IMAGE + restaurant.pictureId}"
      alt="${restaurant.name}" title="${restaurant.name}" 
      crossorigin="anonymous"/>
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">
        ${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createHomeTemplate = () => `
  <div class="hero">
      <img src="/heros/hero-prambanan.jpeg" alt="Hero Image">
      <div class="hero-text">
        <h1>JAVORE</h1>
        <p>Explore Java and Find Paradise</p>
      </div>
    </div>
    
    <div class="top-destinations">
      <h2>Top Destinations</h2>
      <div class="destinations-grid">
        <div class="destination-item">
          <img src="/gambar/lawang-sewu.jpeg" alt="Lawang Sewu">
          <h3>Lawang Sewu</h3>
        </div>
        <div class="destination-item">
          <img src="/gambar/borobudur.jpeg" alt="Borobudur">
          <h3>Borobudur</h3>
        </div>
        <div class="destination-item">
          <img src="/gambar/prambanan.jpeg" alt="Prambanan">
          <h3>Prambanan</h3>
        </div>
        <div class="destination-item">
          <img src="/gambar/sam-poh-kong.jpeg" alt="Sam Poo Kong">
          <h3>Sam Poo Kong</h3>
        </div>
      </div>
    </div>

    <div class="travel-plan">
      <h2>Travel Plan</h2>
      <p>Exploration of History, Nature and Culinary</p>
      <div class="travel-plan-grid">
        <div class="travel-plan-item" data-city="Surabaya">
          <img src="/gambar/travelplan-semarang.jpeg" alt="Semarang">
          <h3>Surabaya</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-jogja.jpeg" alt="Yogyakarta">
          <h3>Medan</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-magelang.jpeg" alt="Magelang">
          <h3>Magelang</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-solo.jpg" alt="Solo">
          <h3>Solo</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-kudus.jpg" alt="Kudus">
          <h3>Kudus</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-purwokerto.jpeg" alt="Purwokerto">
          <h3>Purwokerto</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-jepara.jpeg" alt="Jepara">
          <h3>Jepara</h3>
          <p>3 Days 2 Night</p>
        </div>
        <div class="travel-plan-item">
          <img src="/gambar/travelplan-wonosobo.jpeg" alt="Wonosobo">
          <h3>Wonosobo</h3>
          <p>3 Days 2 Night</p>
        </div>
      </div>
    </div>

    <div class="slider-section">
      <h2>Destination</h2>
      <p>Explore Central Java Confidently</p>
      <div class="slider">
        <div class="slide">
          <img src="/gambar/homeslider1.jpg" alt="Destination 1">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider2.jpeg" alt="Destination 2">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider3.jpeg" alt="Destination 3">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider4.jpg" alt="Destination 4">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider5.jpeg" alt="Destination 5">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider6.jpg" alt="Destination 6">
        </div>
        <div class="slide">
          <img src="/gambar/homeslider7.jpeg" alt="Destination 7">
        </div>
        
      </div>
    </div>

    <div class="meet-our-team">
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="/gambar/dina.jpg" alt="Team Member">
          <h3>Dina Rahma Prasilda</h3>
          <p>UI/UX Designer</p>
        </div>
        <div class="team-member">
          <img src="/gambar/kiki.jpg" alt="Team Member">
          <h3>Kiki Mulyadi</h3>
          <p>Front End Developer</p>
        </div>
        <div class="team-member">
          <img src="/gambar/salma.jpg" alt="Team Member">
          <h3>Sunniyyah Salma Fatihatur Rahmah</h3>
          <p>Back End Developer</p>
        </div>
      </div>
    </div>

    <div class="our-vision">
  <div class="vision-item">
    <img src="/icons/team.png" alt="Icon">
    <h3>Great Teamwork</h3>
    <p>At Javore, we believe in the power of collaboration. Our team works seamlessly to enhance your travel experience.</p>
  </div>
  <div class="vision-item">
    <img src="/icons/roket.png" alt="Icon">
    <h3>Our Vision</h3>
    <p>Discover a new way to explore the world with Javore. We envision simplifying your journey to finding the perfect travel destinations.</p>
  </div>
  <div class="vision-item">
    <img src="/icons/grafik.png" alt="Icon">
    <h3>Our Mission</h3>
    <p>Our mission at Javore is to make travel planning effortless. We strive to provide you with tools and information to make informed travel decisions.</p>
  </div>
</div>

`;

const createReviewTemplate = () => `
<header class="header-review">
   <div class="header-content">
            <h1 class="location-title">Lawang Sewu</h1>
            <div class="rating">
                <div class="rating-value">4.5</div>
                <div class="stars">
                    <span>⭐️⭐️⭐️⭐️⭐️</span>
                </div>
                <div class="reviews-count">(50 Reviews)</div>
            </div>
            <button class="write-review-btn" onclick="openReviewPopup()">
            Write a Review</button>
        </div>
        <section class="average-rating">
            <div class="average-value">4.7</div>
            <div class="stars">
                <span>⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <div class="reviews-count">(50 Reviews)</div>
            <div class="rating-bars">
                <div class="rating-bar">
                    <div class="rating-bar-label">5 stars</div>
                    <div class="rating-bar-fill" style="width: 80%;"></div>
                    <div class="rating-bar-count">40</div>
                </div>
                <div class="rating-bar">
                    <div class="rating-bar-label">4 stars</div>
                    <div class="rating-bar-fill" style="width: 15%;"></div>
                    <div class="rating-bar-count">8</div>
                </div>
                <div class="rating-bar">
                    <div class="rating-bar-label">3 stars</div>
                    <div class="rating-bar-fill" style="width: 5%;"></div>
                    <div class="rating-bar-count">2</div>
                </div>
                <div class="rating-bar">
                    <div class="rating-bar-label">2 stars</div>
                    <div class="rating-bar-fill" style="width: 0%;"></div>
                    <div class="rating-bar-count">0</div>
                </div>
                <div class="rating-bar">
                    <div class="rating-bar-label">1 star</div>
                    <div class="rating-bar-fill" style="width: 0%;"></div>
                    <div class="rating-bar-count">0</div>
                </div>
            </div>
        </section>
        <section class="reviews-section">
            <div class="sort-reviews">
                <label for="sort-reviews">Sort by</label>
                <select id="sort-reviews" onchange="sortReviews()">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                </select>
            </div>
            <div class="reviews-list" id="reviews-list">
                <!-- Reviews will be injected here by JavaScript -->
            </div>
            <div class="pagination">
                <button onclick="prevPage()">❮</button>
                <span id="current-page">1</span>
                <button onclick="nextPage()">❯</button>
            </div>
        </section>
        <div id="review-popup" class="review-popup">
        <div class="popup-content">
            <span class="close" onclick="closeReviewPopup()">&times;</span>
            <h2>Write a Review</h2>
            <form id="review-form" onsubmit="submitReview(event)">
                <div>
                    <label for="reviewer-name">Name:</label>
                    <input type="text" id="reviewer-name" required>
                </div>
                <div>
                    <label for="review-text">Review:</label>
                    <textarea id="review-text" rows="4" required></textarea>
                </div>
                <div>
                    <label for="review-rating">Rating:</label>
                    <select id="review-rating" required>
                        <option value="5">5 stars</option>
                        <option value="4">4 stars</option>
                        <option value="3">3 stars</option>
                        <option value="2">2 stars</option>
                        <option value="1">1 star</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
`;

const createDeskripsiTemplate = (restaurant) => `
  <section class="herodes">
    img class="movie__poster" src="http://localhost:3000/uploads/${restaurant.foto_wisata}" alt="${restaurant.nama_wisata}" crossorigin="anonymous"/>
    <h1>${restaurant.title}</h1>
  </section>
  <section class="contentdes">
    <div class="description">
      <p>${restaurant.deskripsi_wisata}</p>
      <img src="http://localhost:3000/uploads/${restaurant.foto_wisata}" alt="${restaurant.nama_wisata}" crossorigin="anonymous"/>
      <p>${restaurant.deskripsi_wisata}</p>
      <div class="movie__overview">
      <h3>Day 1</h3>
      <p>${restaurant.day1}</p>
    </div>
    <div class="movie__overview">
      <h3>Day 2</h3>
      <p>${restaurant.day2}</p>
    </div>
    <div class="movie__overview">
      <h3>Day 3</h3>
      <p>${restaurant.day3}</p>
    </div>
      <div class="map">
        <iframe 
          src="${restaurant.link_maps}" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
    <aside>
      <div class="travel-plan">
        <h3>Travel Plan</h3>
        <p>${restaurant.travel_plan}</p>
      </div>
      <div class="categories">
        <h3>Categories</h3>
        <ul>
          <li>${restaurant.kota}</li>
        </ul>
      </div>
          <div class="contact">
        <h3>Have Any Question?</h3>
        <p>Feel free to contact us for more details about this stunning tourist destination.</p>
        <p>📞 081542394942</p>
        <p>📧 admin@javore.com</p>
      </div>
    </aside>
  </section>
`;
const createAboutTemplate = () => `
<div class="our-vision">
  <div class="vision-item">
    <img src="/icons/team.png" alt="Icon">
    <h3>Great Teamwork</h3>
    <p>At Javore, we believe in the power of collaboration. Our team works seamlessly to enhance your travel experience.</p>
  </div>
  <div class="vision-item">
    <img src="/icons/roket.png" alt="Icon">
    <h3>Our Vision</h3>
    <p>Discover a new way to explore the world with Javore. We envision simplifying your journey to finding the perfect travel destinations.</p>
  </div>
  <div class="vision-item">
    <img src="/icons/grafik.png" alt="Icon">
    <h3>Our Mission</h3>
    <p>Our mission at Javore is to make travel planning effortless. We strive to provide you with tools and information to make informed travel decisions.</p>
  </div>
</div>
<div class="meet-our-team">
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="/gambar/dina.jpg" alt="Team Member">
          <h3>Dina Rahma Prasilda</h3>
          <p>UI/UX Designer</p>
        </div>
        <div class="team-member">
          <img src="/gambar/kiki.jpg" alt="Team Member">
          <h3>Kiki Mulyadi</h3>
          <p>Front End Developer</p>
        </div>
        <div class="team-member">
          <img src="/gambar/salma.jpg" alt="Team Member">
          <h3>Sunniyyah Salma Fatihatur Rahmah</h3>
          <p>Back End Developer</p>
        </div>
      </div>
    </div>

    
    `;

    const createTourTemplate = () => `
  <div class="container">
        <div class="breadcrumb">
            <a href="#">Home</a> &gt; <a href="#">Tours</a> &gt; <span>Semarang 3D2N</span>
        </div>
        <div class="main-content">
            <div class="content">
                <div class="itinerary">
                    <div class="day">
                        <h2>Day 1: Arrival and City Exploration</h2>
                        <div class="time-period">
                            <h3>Morning</h3>
                            <p><strong>Arrival in Semarang:</strong> Check-in at the hotel.</p>
                            <p><strong>Breakfast:</strong> Enjoy a typical Semarang breakfast such as Lumpia Semarang at Gang Lombok.</p>
                        </div>
                        <div class="time-period">
                            <h3>Afternoon</h3>
                            <p><strong>Lawang Sewu:</strong> Visit this historic building famous for its magnificent architecture and mystical stories.</p>
                            <p><strong>Old Town Semarang:</strong> Explore this area filled with Dutch colonial buildings. Don't forget to stop by Blenduk Church and Srigunting Park.</p>
                            <p><strong>Lunch:</strong> Try Bu Wido's Chicken Rice around the Old Town.</p>
                        </div>
                        <div class="time-period">
                            <h3>Afternoon</h3>
                            <p><strong>Sam Poo Kong:</strong> Visit this magnificent temple that witnesses the historical journey of Admiral Cheng Ho.</p>
                        </div>
                        <div class="time-period">
                            <h3>Evening</h3>
                            <p><strong>Night food:</strong> Enjoy night food at Simpang Lima, try the tofu gimbal and wedang tahu.</p>
                            <p><strong>Back to hotel:</strong> Rest and prepare for the next day.</p>
                        </div>
                    </div>
                </div>
                <div class="itinerary">
                    <div class="day">
                        <h2>Day 2: Nature and Culture Tours</h2>
                        <div class="time-period">
                            <h3>Morning</h3>
                            <p>Explore the beauty of Semarang's natural attractions.</p>
                        </div>
                        <div class="time-period">
                            <h3>Afternoon</h3>
                            <p>Visit local cultural sites and enjoy lunch at a traditional restaurant.</p>
                        </div>
                        <div class="time-period">
                            <h3>Evening</h3>
                            <p>Experience the nightlife in Semarang with a visit to popular spots.</p>
                        </div>
                    </div>
                </div>
                 <div class="itinerary">
                    <div class="day">
                        <h2>Day 3: Shopping and Culinary Cover</h2>
                        <div class="time-period">
                            <h3>Morning</h3>
                            <p><strong>Semawis Market:</strong> If it's a weekend, visit this market, which is open from morning until noon, and is famous for its culinary delights and unique items.</p>
                            <p><strong>Breakfast:</strong> Enjoy chicken porridge or pecel around Semawis Market.</p>
                        </div>
                        <div class="time-period">
                            <h3>Afternoon</h3>
                            <p><strong>Simpang Lima:</strong> Explore this area, or go shopping at Ciputra Mall or Paragon City Mall</p>
                            <p><strong>Launch:</strong> Stop by a typical Semarang restaurant such as Soto Bangkong.</p>
                        </div>
                        <div class="time-period">
                            <h3>Afternoon</h3>
                            <p><strong>Pandanaran Souvenir Center:</strong> Shop for Semarang souvenirs such as Bandeng Presto, Wingko Babat, and Moaci Gemini.</p>
                            <p><strong>Back to hotel:</strong> Prepare for check-out and drive home.</p>
                        </div>
                        <div class="time-period">
                            <h3>Evening</h3>
                            <p><strong>Return:</strong> Head to the airport or station to return to your hometown</p>
                        </div>
                    </div>
                </div>
                <div class="itinerary">
                    <div class="day">
                        <h2>Wisata Bisa Di Custom, Silahkan Hubungi Kami Melalui Whatsapp</h2>
                    </div>
                </div>
            </div>
            
            <div class="sidebar">
                <h3>Categories</h3>
                <ul>
                    <li> <img src="/icons/Arrow 1.png" alt="arrow" width="20px">
                        <a href="#">Semarang</a></li>
                    <li> <img src="/icons/Arrow 1.png" alt="arrow" width="20px">
                        <a href="#">Yogyakarta</a></li>
                    <li><img src="/icons/Arrow 1.png" alt="arrow" width="20px">
                        <a href="#">Magelang</a></li>
                    <li><img src="/icons/Arrow 1.png" alt="arrow" width="20px">
                        <a href="#">Purwokerto</a></li>
                </ul>
            </div>
        </div>
    </div>
    `;

export {
  createDeskripsiTemplate, createHomeTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate, createRestaurantsDetailTemplate,
  createRestaurantsItemTemplate, createReviewTemplate,createAboutTemplate,createTourTemplate
};

