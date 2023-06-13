require('dotenv').config()
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
const apiKey = process.env.API_KEY;
const weatherLocation = 'Santa Clara, US'; // Replace with the desired location
// Fetch weather data from OpenWeather API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Extract the relevant weather information from the response
        const description = data.weather[0].description;
        const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius

        // Display the weather information on the webpage
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `Currently ${temperature.toFixed(1)} &#8451; (${description}) in ${location}`;
    })
    .catch(error => {
        console.log('An error occurred while fetching weather data:', error);
    });





