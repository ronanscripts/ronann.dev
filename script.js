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

//commented out because i cannot get the api key.
//i dont want to do a bunch of bs like making a proxy for it, and i cant use .env because i dont want to use a bloated framework
/*const apiKey = API_KEY;
const weatherLocation = 'Atherton, US';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        // Extract the relevant weather information from the 'data' object
        const temperatureKelvin = data.main.temp;
        const temperatureCelsius = temperatureKelvin - 273.15; // Convert to Celsius
        const description = data.weather[0].description;
        const weatherMain = data.weather[0].main;

        // Weather icon logic
        let weatherIcon = "";
        switch (weatherMain) {
            case "Snow":
                weatherIcon = "❄️";
                break;
            case "Thunderstorm":
                weatherIcon = "⛈";
                break;
            case "Rain":
                weatherIcon = "☔️";
                break;
            case "Drizzle":
                weatherIcon = "🌦";
                break;
            case "Mist":
            case "Clouds":
            default:
                weatherIcon = "☁️";
                break;
            case "Clear":
                weatherIcon = "☀️";
                break;
            case "Haze":
                weatherIcon = "🌫";
                break;
        }

        // Format the weather information
        const formattedWeather = `${weatherIcon} Currently ${temperatureCelsius.toFixed(1)} °C (${description}) in ${weatherLocation}`;

        // Update the HTML element with the formatted weather information
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = formattedWeather;
        weatherDiv.style.color = 'white';
    })
    .catch(error => {
        console.log('Error:', error);
    }); */



