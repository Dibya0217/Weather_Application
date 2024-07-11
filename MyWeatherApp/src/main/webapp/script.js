document.addEventListener("DOMContentLoaded", function() {
    // Specify the timezone ('Asia/Kolkata' for Indian Standard Time)
    var timeZone = 'Asia/Kolkata';
    
    // Get the current date and time in the specified timezone
    var now = new Date().toLocaleString('en-US', {timeZone: timeZone});

    // Convert the string representation of date and time to a Date object
    now = new Date(now);

    var hour = now.getHours();
    var greetingMsg = document.getElementById("greeting-msg");

    if (hour >= 5 && hour < 12) {
        greetingMsg.textContent = "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        greetingMsg.textContent = "Good afternoon!";
    } else if (hour >= 18 && hour < 22) {
        greetingMsg.textContent = "Good evening!";
    } else {
        greetingMsg.textContent = "Good night!";
    }

    // Update date and time
    var dateTimeElement = document.getElementById("date-time");
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    dateTimeElement.textContent = now.toLocaleDateString('en-US', options);

    // Show weather details after form submission
    var weatherForm = document.getElementById("weather-form");
    weatherForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var formData = new FormData(weatherForm);
        fetch(weatherForm.action, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("weather-container").style.display = "none";
            document.getElementById("weather-details").style.display = "flex";
            var weatherData = JSON.parse(data);
            updateWeatherDetails(weatherData);
        })
        .catch(error => console.error('Error:', error));
    });

    function updateWeatherDetails(data) {
        document.getElementById("city").textContent = data.city;
        document.getElementById("temperature").textContent = data.temperature + "°C";
        document.getElementById("weatherCondition").textContent = data.weatherCondition;
        document.getElementById("humidity").textContent = "Humidity: " + data.humidity;
        document.getElementById("windSpeed").textContent = "Wind Speed: " + data.windSpeed;
    }
});
