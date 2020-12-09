const createVenueHTML = (name, location, iconSource, categories) => {
  return `<h2>${name}</h2>
  <p>${categories[0].name}</p>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
		<h2>Temperature: ${kelvinToFahrenheit(currentDay.main.temp)}&deg;F</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
    <h3>Feels like: ${kelvinToFahrenheit(currentDay.main.feels_like)}</h3>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">
    <h2>Country: ${currentDay.sys.country}</h2>`;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);

