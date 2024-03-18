const form = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
const apiKey = "42cc96118dc88545a7c1fa7a4d7ff542";

form.addEventListener('submit', e => {
    e.preventDefault();
    const location = locationInput.value.trim();
    
    if (!location) {
        alert('Please enter a location');
        return;
    }

    const unitType = localStorage.getItem('unitType') || 'imperial';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}&units=${unitType}`;
    
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('No weather found');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const weather = data.weather[0].description;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const weatherInfo = `
        <h2>Weather at: ${location}</h2>
        <p>Weather: ${weather}</p>
        <p>Temperature: ${temp}°${unitType === 'metric' ? 'C' : 'F'}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${wind}${unitType === 'metric' ? 'm/s' : 'mph'}</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
    
    })
    .catch(error => {
        document.getElementById('weather-info').innerHTML = '<h2>Weather info not found</h2>';
    });
});