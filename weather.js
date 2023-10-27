const apikey = "ef5e8ab623ca53f012b2727b14b5638c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const unit = "&units=imperial";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + unit + '&appid=' + apikey);
  var data = await response.json();
  
  console.log(data);
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°F';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'MPH';

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src= "Images/clouds.png";
  }
  else if(data.weather[0].main == "clear"){
    weatherIcon.src= "Images/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src= "Images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src= ".Images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src= "Images/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src= "Images/snow.png";
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

checkWeather();