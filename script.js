const textarea = document.getElementById("locationInput");

textarea.addEventListener("input", function () {
    this.style.width = "1%";
    this.style.width = this.scrollWidth + "px";
});



function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const location = locationInput.value; // Get the user-entered location
    const temp = document.getElementById('temperature');
    const exclude = "minutely,hourly,alerts"; // Exclude specific weather data you don't need
    const apiKey = "d6d9e36d59043fac15bd837c6354b951"; // Replace with your API key

    // Construct the API URL with the user-entered location
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&exclude=${exclude}&appid=${apiKey}`;
    const notif = document.getElementById('errorNotification');
    const feelsLike = document.getElementById('feelsLike');
    const nameData = document.getElementById('nameData');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const weatherDescription = document.getElementById('weatherDescription');
    const weatherIcon = document.getElementById('weatherIcon');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract and use the weather data as needed
            console.log(data); // You can inspect the data in the console
            notif.innerHTML = "";
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
