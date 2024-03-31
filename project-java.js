function content(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-button").value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = inputCity;
  let apiKey = "ffb786b3f2bba34t9ab39o0cf4afb092";
  let url = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}`;
  function display(response) {
    let currTemp = Math.round(response.data.temperature.current);
    let element = document.querySelector("#tempNew");
    element.innerHTML = currTemp;
  }
  axios.get(url).then(display);
}
let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", content);
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();
let d = document.querySelector(".day");
let h = document.querySelector(".hr");
let m = document.querySelector(".min");
d.innerHTML = day;
h.innerHTML = hour;
m.innerHTML = min;
