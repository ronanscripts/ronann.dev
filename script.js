const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = "feaa29c2e60f14e6ef146030814d162a";
const weatherLocation = 'San Jose, US';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
    // Extract the relevant weather information from the 'data' object
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    // Format the weather information
    const formattedWeather = `Currently ${temperature.toFixed(1)} &#8451; (${description}) in ${location}`;

    // Update the HTML element with the formatted weather information
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = formattedWeather;
    })
    .catch(error => {
    console.log('Error:', error);
    });






