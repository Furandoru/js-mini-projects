const apiKey = "b590254d4d6947e7a3795412251005"; // Your full API key
const weatherResult = document.getElementById("weatherResult");
const getWeatherBtn = document.getElementById("getWeatherBtn");

getWeatherBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    weatherResult.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        weatherResult.innerHTML = "City not found!";
      } else {
        const { temp_c, condition } = data.current;
        const { name, country } = data.location;
        weatherResult.innerHTML = `
          <h2>${name}, ${country}</h2>
          <img src="https:${condition.icon}" alt="weather icon" />
          <p>${condition.text}</p>
          <p>Temperature: ${temp_c} °C</p>
        `;
      }
    })
    .catch((error) => {
      weatherResult.innerHTML = "Error fetching weather data.";
      console.error(error);
    });
});
