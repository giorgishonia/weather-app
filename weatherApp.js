
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('locationInput').addEventListener('keyup', function (event) {
        if(event.key === 'Enter'){

        const locationInput = document.getElementById('locationInput');
        const location = locationInput.value;
        const apiKey = "5E5EAHF7W2HRCLC5LMSKEVB5T";
        const cityAndCountry = document.getElementById('cityAndCountry');
        const temp = document.getElementById('temperature');
        const feelsLike = document.getElementById('feelsLike');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const lastUpdated = document.getElementById('lastUpdated');
        const notif = document.getElementById('errorNotification');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('windSpeed');
        const cloudCover = document.getElementById('cloudCover');

        function getWeatherData(location, apiKey) {
            const unit = "metric"
            const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}&contentType=json`;

            return fetch(apiUrl)
                .then(response => response.json())
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    throw error;
                });
        
            } 

        function displayWeatherData(data, location) {
            cityAndCountry.innerHTML = `${data.resolvedAddress}`;
            temp.innerHTML = `🌡${Math.floor(data.currentConditions.temp)}<span style="color:#33CCCC; font-size:25px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:15px;font-family: Modulus;font-weight: bold;">C</span>`;
            feelsLike.innerHTML = `${(data.description)}`; 
            // sunrise.innerHTML = `Sunrise: ${(data.currentConditions.sunrise)}`;
            // sunset.innerHTML = `Sunset: ${(data.currentConditions.sunset)}`;
            weatherDescription.innerHTML = `${data.currentConditions.conditions}`;
            // lastUpdated.innerHTML = `Last Updated: ${data.currentConditions.datetime}`
            weatherIcon.src = `icons/${data.currentConditions.icon}.gif`;
            notif.innerHTML = "";
            humidity.innerHTML = `<span style="font-size:17px;">🌢 </span>${data.currentConditions.humidity} <span style="color:#33CCCC;font-family: Modulus;">%</span>`;
            cloudCover.innerHTML = `<span style="font-size:20px;">☁︎ </span>${data.currentConditions.cloudcover} <span style="color:#33CCCC;font-family: Modulus;">%</span>`;
            windSpeed.innerHTML = `<span style="font-size:30px;">༄ </span>${data.currentConditions.windspeed} <span style="color:#33CCCC;font-family: Modulus;">km/h</span>`;
            const its = document.getElementById('its');
            const yleoba = document.getElementById('yleoba');
            
            const datetimeEpoch = document.getElementById('datetimeEpoch');
            const datetimeEpoch2 = document.getElementById('datetimeEpoch2');
            const datetimeEpoch3 = document.getElementById('datetimeEpoch3');
            const datetimeEpoch4 = document.getElementById('datetimeEpoch4');
            const datetimeEpoch5 = document.getElementById('datetimeEpoch5');
            const datetimeEpoch6 = document.getElementById('datetimeEpoch6');
            // const datetimeEpochMain = document.getElementById('datetimeEpochMain');
            
            const temp1 = document.getElementById('temp1');   
            const temp2 = document.getElementById('temp2');    
            const temp3 = document.getElementById('temp3');    
            const temp4 = document.getElementById('temp4');    
            const temp5 = document.getElementById('temp5');    
            const temp6 = document.getElementById('temp6'); 
            
            const icon = document.getElementById('icon');
            const icon2 = document.getElementById('icon2');
            const icon3 = document.getElementById('icon3');
            const icon4 = document.getElementById('icon4');
            const icon5 = document.getElementById('icon5');
            const icon6 = document.getElementById('icon6');

            icon.src = `icons/${data.days[1].icon}.gif`;
            icon2.src = `icons/${data.days[2].icon}.gif`;
            icon3.src = `icons/${data.days[3].icon}.gif`;
            icon4.src = `icons/${data.days[4].icon}.gif`;
            icon5.src = `icons/${data.days[5].icon}.gif`;
            icon6.src = `icons/${data.days[6].icon}.gif`;


            
            
            temp1.innerHTML = `🌡${Math.floor(data.days[1].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`;
            temp2.innerHTML = `🌡${Math.floor(data.days[2].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`;
            temp3.innerHTML = `🌡${Math.floor(data.days[3].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`;  
            temp4.innerHTML = `🌡${Math.floor(data.days[4].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`;      
            temp5.innerHTML = `🌡${Math.floor(data.days[5].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`;  
            temp6.innerHTML = `🌡${Math.floor(data.days[6].temp)}<span style="color:#33CCCC; font-size:20px;font-family: Modulus;">°</span><span style="color:#33CCCC; font-size:10px;font-family: Modulus;font-weight: bold;">C</span>`; 
            
            
            // datetimeMain = `${new Date(data.days[0].datetime)}`;
            datetime = `${new Date (data.days[1].datetime)}`;
            datetime2 = `${new Date(data.days[2].datetime)}`;
            datetime3 = `${new Date(data.days[3].datetime)}`;  
            datetime4 = `${new Date(data.days[4].datetime)}`;      
            datetime5 = `${new Date(data.days[5].datetime)}`;  
            datetime6 = `${new Date(data.days[6].datetime)}`;  
            datetimeEpoch.innerHTML = datetime[0] + datetime[1] + datetime[2];
            datetimeEpoch2.innerHTML = datetime2[0] + datetime2[1] + datetime2[2];
            datetimeEpoch3.innerHTML = datetime3[0] + datetime3[1] + datetime3[2];
            datetimeEpoch4.innerHTML = datetime4[0] + datetime4[1] + datetime4[2];
            datetimeEpoch5.innerHTML = datetime5[0] + datetime5[1] + datetime5[2];
            datetimeEpoch6.innerHTML = datetime6[0] + datetime6[1] + datetime6[2];
            // datetimeEpochMain.innerHTML = datetimeMain[0] + datetimeMain[1] + datetimeMain[2];


            its.innerHTML = "it's";
            console.log(data);
        }

        getWeatherData(location, apiKey)
            .then(weatherData => {
                displayWeatherData(weatherData, location);
            })
            .catch(error => {
                yleoba.innerHTML = "Right now it's"
                its.innerHTML = "FUCKING ERROR"
                console.error('Error fetching weather data:', error);
                cityAndCountry.innerHTML = ``;
                temp.innerHTML = ``;

                // sunrise.innerHTML = `Sunrise:`;
                // sunset.innerHTML = `Sunset:`;
                weatherDescription.innerHTML = ``;
                weatherIcon.src = `icons/warning.gif`;
                notif.innerHTML = "Provided location is incorrect";
                // lastUpdated.innerHTML = `Last Updated:`
                humidity.innerHTML = ``;
                cloudCover.innerHTML = ``;
                windSpeed.innerHTML = ``;
                datetimeEpoch.innerHTML = ``;
                datetimeEpoch2.innerHTML = ``;
                datetimeEpoch3.innerHTML = ``;
                datetimeEpoch4.innerHTML = ``;
                datetimeEpoch5.innerHTML = ``;
                datetimeEpoch6.innerHTML = ``;
                icon.src = ``;
                icon2.src = ``;
                icon3.src = ``;
                icon4.src = ``;
                icon5.src = ``;
                icon6.src = ``;


                feelsLike.innerHTML = ``; 

                temp1.innerHTML = ``;
                temp2.innerHTML = ``;
                temp3.innerHTML = ``;
                temp4.innerHTML = ``;
                temp5.innerHTML = ``;
                temp6.innerHTML = ``;

            });
        }
    });
});
