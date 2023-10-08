const apiKey = '730f86b389f4f7376fc65d93011efdc2';
const apiUrl = 'http://api.weatherstack.com/current';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const weatherTemperatureData = document.getElementById('weatherTemperatureData');
const countryData = document.getElementById('countryData');
const windSpeedData = document.getElementById('windSpeedData');
const observationTimeData = document.getElementById('observationTimeData');
const feelsLikeData = document.getElementById('feelsLikeData');
const localTime = document.getElementById('localTime');
const nameData = document.getElementById('nameData');
const errorNotification = document.getElementById('errorNotification');

searchButton.addEventListener('click', () => {

    const location = locationInput.value;
    const fullUrl = `${apiUrl}?access_key=${apiKey}&query=${location}`;

    
    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            localTime.innerHTML = `Local Time: ${data.location.localtime}`;            
            observationTimeData.innerHTML = `Observation Time: ${data.current.observation_time}` ;           weatherTemperatureData.innerHTML = `Temperature: ${data.current.temperature}°C`;
            feelsLikeData.innerHTML = `Feels Like: ${data.current.feelslike}°C`;
            nameData.innerHTML = `Name: ${data.location.name}`;
            countryData.innerHTML = `Country: ${data.location.country}`;
            windSpeedData.innerHTML = `Wind Speed: ${data.current.wind_speed} km/h`;

            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            errorNotification.innerHTML = 'Invalid location. Please try again.';
        });
});

locationInput.addEventListener('input', () => {
    errorNotification.innerHTML = '';
});
