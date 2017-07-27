import axios from 'axios';

const API_KEY = 'e0e6bc3e4f76bd0cee424878945e0461';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},tw`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}