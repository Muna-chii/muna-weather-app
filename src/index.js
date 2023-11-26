let apiKey = "t5167dfc23187f0cc37be9a3a070d4of";
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function showTemperature(response) {
  let cityName = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let cityTemp = Math.round(response.data.temperature.current);
  let humidity = document.querySelector("#humidity");
  let icon = document.querySelector("#icon");
  let description = document.querySelector("#sky-description");
  let windspeed = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let fahrenheit = Math.round((temperature * 9) / 5 + 32);

  iconURL = response.data.condition.icon_url;
  icon.innerHTML = `<img src="${iconURL}" width="150"/>`;
  cityName.innerHTML = `${response.data.city}, ${response.data.country}`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  temperature.innerHTML = cityTemp;
  description.innerHTML = response.data.condition.description;
  windspeed.innerHTML = `${response.data.wind.speed}km/h`;
  let date = new Date(response.data.time * 1000);
  time.innerHTML = getDate(date);
}

function getDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function submitForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-city");
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(showTemperature);
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", submitForm);

let defaultCity = "Lagos";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiURL).then(showTemperature);
