(function () {

	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		
		var kelConvert = weather.main.temp;
		var totalConvert = (kelConvert * 9) / 5 - 459.67;
		var final = Math.floor(totalConvert);
		console.log(final);

		$('#weather').append(`<h3><center>
			${final } F	
			<br>
			${weather.weather[0].description}				
		</h3>`);
		//What can you do with this weather object?
	})



} ())
