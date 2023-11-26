function submitForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-city");
  let cityName = document.querySelector("#city");
  cityName.innerHTML = searchInput.value;
}
let searchCity = document.querySelector("form");
searchCity.addEventListener("submit", submitForm);
