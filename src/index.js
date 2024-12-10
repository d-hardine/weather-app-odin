import './styles.css';
import weatherLogo from './weather-logo.png';
import { weatherIconCheck } from './weather-icon-control';


const logo = document.querySelector('#weather-logo');
logo.src = weatherLogo;
logo.style.width = '320px'

const bottomContainer = document.querySelector('.bottom-container')
let loading = document.querySelector('.loading')

const locationForm = document.querySelector('.location-form')
locationForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let location = document.querySelector('#location').value
    getWeather(location)
})

async function getWeather(location) {
    try {
        bottomContainer.style.display = 'flex';
        bottomContainer.style.flexDirection = 'column';

        const realLocation = document.querySelector('.real-location')
        realLocation.textContent = '';
        const localizedLocation = document.querySelector('.localized-location')
        localizedLocation.textContent = '';
        const weatherIcon = document.querySelector('#weather-icon')
        weatherIcon.src = '';
        const temp = document.querySelector('.temp')
        temp.textContent = ''
        const tempFeelsLike = document.querySelector('.temp-feels-like')
        tempFeelsLike.textContent = ''
        const tempMinMax = document.querySelector('.temp-min-max')
        tempMinMax.textContent = ''
        const humidity = document.querySelector('.humidity')
        humidity.textContent = ''
        const precipitation = document.querySelector('.precipitation')
        precipitation.textContent = ''
        const windSpeed = document.querySelector('.wind-speed')
        windSpeed.textContent = ''
        const conditions = document.querySelector('.conditions')
        conditions.textContent = ''
        const description = document.querySelector('.description')
        description.textContent = ''

        bottomContainer.style.alignItems = 'center';
        loading.style.display = "block";

        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=GG5NETFHEYT92CXXEK75FCNT6&contentType=json`, {mode: 'cors'});
        const weatherData = await response.json();
        loading.style.display = "none";
        bottomContainer.style.alignItems = 'normal';

        realLocation.textContent = weatherData.address
        localizedLocation.textContent = weatherData.resolvedAddress

        const icon = weatherData.currentConditions.icon
        weatherIconCheck(icon)
        temp.textContent = `${weatherData.currentConditions.temp}°C`
        temp.style.fontSize = '54px'
        tempFeelsLike.textContent = `Feels like: ${weatherData.currentConditions.feelslike}°C`
        const tempMin = weatherData.days[0].tempmin
        const tempMax = weatherData.days[0].tempmax
        tempMinMax.textContent = `min: ${tempMin}°C | max: ${tempMax}°C`

        humidity.textContent = `Humidity: ${weatherData.currentConditions.humidity}%`
        precipitation.textContent = `precipitation: ${weatherData.days[0].precip}%`
        windSpeed.textContent = `Wind: ${weatherData.days[0].windspeed}km/h`

        conditions.textContent = weatherData.currentConditions.conditions
        description.textContent = weatherData.description;
    } catch (error) {
        alert(error)
        bottomContainer.style.display = 'none';   
    }
}