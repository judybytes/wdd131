// Weather Widget
const apiKey = '6386a5acbe27d47e12b0241f8cf52381';
const city = 'Cape Town';
const weatherDiv = document.getElementById ('weather');
const cityDisplayElement = document.getElementById('city');

function updateWeather() {
    if (!weatherDiv || !cityDisplayElement) return;

    weatherDiv.innerHTML = "<p>Loading weather data...</p>";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                const temperature = Math.round(data.main.temp);
                const conditions = data.weather[0].description;
                cityDisplayElement.textContent = data.name; // Update the city name
                weatherDiv.innerHTML = `<p>${temperature}°C, ${conditions}</p>`;
            } else {
                console.error("Error fetching weather data:", data.message);
                weatherDiv.innerHTML = "<p>Weather information is currently unavailable.</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherDiv.innerHTML = "<p>An error occurred while fetching weather information.</p>";
        });
}

// Initialize map
let map;
function initMap() {
    const mapDiv = document.getElementById('map');
    if (!mapDiv) return;

    map = L.map('map').setView([-30.5595, 22.9375], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-33.9249, 18.4241]).addTo(map).bindPopup('<b>Cape Town</b>');
    L.marker([-25.7478, 28.2293]).addTo(map).bindPopup('<b>Pretoria</b>');
    L.marker([-29.8587, 31.0277]).addTo(map).bindPopup('<b>Durban</b>');

    // Use setTimeout to invalidate size after a short delay
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
}

// Testimonials
const testimonialsData = [
    { author: "Bidney Swift", text: "Amazing experience! South Africa is truly a gem." },
    { author: "Jane Brown", text: "The culture and landscapes were breathtaking." },
    { author: "Peter Lawson", text: "A must-visit destination. The wildlife encounters were unforgettable." }
];

function displayTestimonials() {
    const testimonialsContainer = document.getElementById("testimonials");
    if (!testimonialsContainer) return;

    testimonialsData.forEach(testimonial => {
        const testimonialElement = document.createElement("div");
        testimonialElement.classList.add("testimonial");
        testimonialElement.innerHTML = `<p>"${testimonial.text}"</p> - <strong>${testimonial.author}</strong>`;
        testimonialsContainer.appendChild(testimonialElement);
    });
}

// Local Storage for Form Submissions
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const submission = { name, email, message, timestamp: new Date().toLocaleString() };

        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(submission);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

        formMessage.textContent = "Thank you for your submission!";
        formMessage.className = "success"; // Add success class for styling

        contactForm.reset(); // Clear the form
    });
}

// Call functions after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateWeather();
    initMap();
    displayTestimonials();
});