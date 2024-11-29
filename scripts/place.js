// Footer Date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

const temp = 5; // Example value in °C
const windSpeed = 20; // Example value in km/h
const windChill =
  windSpeed > 4.8 && temp <= 10 ? calculateWindChill(temp, windSpeed) : "N/A";

document.getElementById("windChill").textContent = `${windChill} °C`;

