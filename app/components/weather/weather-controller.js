function WeatherController() {
    var wc = this;
    var weatherService = new WeatherService();

    this.getWeather = function getWeather() {
        weatherService.getWeather(function(weather) {
            console.log(weather);
            //What can you do with this weather object?

            draw(weather)
        })
    }

    function draw(weather) {
        var wth = weather
        var template = ``
        var weathElem = document.getElementById("weather-here")
        var kelTemp = wth.main['temp']
        var kelLow = wth.main['temp_min']
        var kelHi = wth.main['temp_max']
        var curTemp = Math.round((kelTemp - 273.15) * 9 / 5 + 32)
        var hiTemp = Math.round((kelHi - 273.15) * 9 / 5 + 32)
        var loTemp = Math.round((kelHi - 273.15) * 9 / 5 + 32)

        template += `
		<h5><center>Weather for ${wth.name}</center></h5>
        <p>Currently: <span>${curTemp}</span> Hi today: <span>${hiTemp}</span>  Low tonight: <span>${loTemp}</span></p>
		<p>You can expect:  <span>${wth.weather[0]['description']}</span></p>
		<button class="btn button btn-info" onclick="app.controllers.weatherController.getWeather()">Update</button>
		`
        weathElem.innerHTML = template
    }

    this.getWeather()
}