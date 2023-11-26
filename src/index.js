function showTemperature(response) {
  console.log(response);
  let temperature = document.querySelector("#temperature");
  let cityTemp = Math.round(response.data.temperature.current);
  let humidity = document.querySelector("#humidity");
  let icon = document.querySelector("#icon");
  let description = document.querySelector("#sky-description");
  let windspeed = document.querySelector("#wind");

  //let fahrenheit = Math.round((celcius * 9) / 5 + 32);

  iconURL = response.data.condition.icon_url;
  icon.innerHTML = `<img src="${iconURL}" width="150"/>`;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  temperature.innerHTML = cityTemp;
  description.innerHTML = response.data.condition.description;
  windspeed.innerHTML = `${response.data.wind.speed}km/h`;
}

function submitForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-city");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = searchInput.value;
  let apiKey = "t5167dfc23187f0cc37be9a3a070d4of";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(showTemperature);
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", submitForm);
