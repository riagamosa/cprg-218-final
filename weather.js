fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun,Mexico&appid=1e9c7c5877af66517e94aaa55aae8b09&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature at Cancun, Mexico: "+data.main.temp + "\u00b0C";
})