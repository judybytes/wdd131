// Product Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averageRating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averageRating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averageRating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averageRating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averageRating: 5.0 }
];

// Populate Product Name Dropdown
const productNameSelect = document.getElementById("product-name");
products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Track review count with localStorage
const form = document.getElementById("product-review-form");
form.addEventListener("submit", (e) => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    localStorage.setItem("reviewCount", reviewCount + 1);
});
