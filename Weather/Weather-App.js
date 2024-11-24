const ApiKey = "Api Key";
const ApiUrl =
    "Api Link";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloudy (1).png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "sun.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "heavy-rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snowy_2044021.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "cloudy.png";
        }
        document.querySelector(".weather").style.display = "Block";
        document.querySelector(".error").style.display = "none";
    }
}

searchbtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
});

CheckWeather();
