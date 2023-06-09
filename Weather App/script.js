const getWeatherData = () => {
    const country = document.querySelector("#country").value
    fetch(`https://api.weatherapi.com/v1/current.json?key=b2ab521e6be34abab47233139230705&q=${country}`)
    .then(response => response.json())
    .then(response => {
        document.querySelector("#w-pic").src = response.current.condition.icon;
        document.querySelector("#cityName").innerText = response.location.name;
        document.querySelector("#temperature").innerText = response.current.temp_c + "°" + "C";
        document.querySelector("#temperature").addEventListener("click", () => {
            document.querySelector("#temperature").innerText = response.current.temp_f + "°" + "F";
        })
        document.querySelector("#feelsLike").innerText = response.current.condition.text;
        document.querySelector("#humidity").innerText = response.current.humidity;
        document.querySelector("#windspeed").innerText = response.current.wind_mph + "mph";;
        document.querySelector("#winddir").innerText = response.current.wind_dir;
        document.querySelector("#pressure").innerText = response.current.pressure_mb + "mb";
    })
    .catch(err => console.error(err));
}