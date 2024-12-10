import clearDay from './SVG/clear-day.svg';
import clearNight from './SVG/clear-night.svg';
import cloudy from './SVG/cloudy.svg';
import fog from './SVG/fog.svg';
import hail from './SVG/hail.svg';
import partlyCloudyDay from './SVG/partly-cloudy-day.svg';
import partlyCloudyNight from './SVG/partly-cloudy-night.svg';
import rainSnowShowersDay from './SVG/rain-snow-showers-day.svg';
import rainSnowShowersNight from './SVG/rain-snow-showers-night.svg';
import rainSnow from './SVG/rain-snow.svg';
import rain from './SVG/rain.svg';
import showersDay from './SVG/showers-day.svg';
import showersNight from './SVG/showers-night.svg';
import sleet from './SVG/sleet.svg';
import snowShowersDay from './SVG/snow-showers-day.svg';
import snowShowersNight from './SVG/snow-showers-night.svg';
import snow from './SVG/snow.svg';
import thunderRain from './SVG/thunder-rain.svg';
import thunderShowersDay from './SVG/thunder-showers-day.svg';
import thunderShowersNight from './SVG/thunder-showers-night.svg';
import thunder from './SVG/thunder.svg';
import wind from './SVG/wind.svg';

const weatherIcon = document.querySelector('#weather-icon')
export function weatherIconCheck(icon) {
    if(icon == 'clear-day') {
        weatherIcon.src = clearDay;
    } else if(icon == 'clear-night') {
        weatherIcon.src = clearNight;
    } else if(icon == 'cloudy') {
        weatherIcon.src = cloudy;
    }else if(icon == 'fog') {
        weatherIcon.src = fog;
    }else if(icon == 'hail') {
        weatherIcon.src = hail;
    }else if(icon == 'partly-cloudy-day') {
        weatherIcon.src = partlyCloudyDay;
    }else if(icon == 'partly-cloudy-night') {
        weatherIcon.src = partlyCloudyNight;
    }else if(icon == 'rain-snow-showers-day') {
        weatherIcon.src = rainSnowShowersDay;
    }else if(icon == 'rain-snow-showers-night') {
        weatherIcon.src = rainSnowShowersNight;
    }else if(icon == 'rain-snow') {
        weatherIcon.src = rainSnow;
    }else if(icon == 'rain') {
        weatherIcon.src = rain;
    }else if(icon == 'showers-day') {
        weatherIcon.src = showersDay;
    }else if(icon == 'showers-night') {
        weatherIcon.src = showersNight;
    }else if(icon == 'sleet') {
        weatherIcon.src = sleet;
    }else if(icon == 'snow-showers-day') {
        weatherIcon.src = snowShowersDay;
    }else if(icon == 'snow-showers-night') {
        weatherIcon.src = snowShowersNight;
    }else if(icon == 'snow') {
        weatherIcon.src = snow;
    }else if(icon == 'thunder-rain') {
        weatherIcon.src = thunderRain;
    }else if(icon == 'thunder-showers-day') {
        weatherIcon.src = thunderShowersDay;
    }else if(icon == 'thunder-showers-night') {
        weatherIcon.src = thunderShowersNight;
    }else if(icon == 'thunder') {
        weatherIcon.src = thunder;
    }else if(icon == 'wind') {
        weatherIcon.src = wind;
    }
    weatherIcon.style.height = '110px'
}