import {WEATHER_API, API_PREFIX, WEATHER_URL} from "./constants";

class WeatherService {
    async fetchFiveDayForeCast() {
        return new Promise(async (success, failure) => {
            try {
                const response = await fetch((`${WEATHER_URL}${WEATHER_API}`))
                if(response.ok) {
                    const json = await response.json;
                    // const city = json.city
                    const data = json.list
                            .filter(day => day.dt_txt.includes("00:00:00"))
                            .map(item => ({
                            city: item.main.city,
                            temp: item.main.temp,
                            feelsLike: item.main.feels_like,
                            humidity: item.main.humidity,
                            windSpeed: item.wind.speed,
                            dt: item.dt,
                            date: item.dt_txt,
                            imgId: item.weather[0].id,
                            desc: item.weather[0].description,
                    }));
                    success({response, data,});
                } else {
                    failure({error: 'Invalid http request'})
                }
            } catch(error) {
                failure(error);
            }
        })
    }
}

export default WeatherService;