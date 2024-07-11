<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>${date }</h1>
<h1>${city }</h1>
<h1>${temperature }</h1>
<h1>${weatherCondition }</h1>
<h1>${humidity }</h1>
<h1>${windSpeed }</h1>
<h1>${weatherData }</h1>

</body>
</html> --%>


<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Weather Details</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <!-- Add Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="style1.css">
</head>
<body>
    <div id="weather-container">
        <div class="weather-box">
            <div id="greeting-box">
                <h1 id="greeting-msg"></h1>
            </div>
            <h2 id="date-time"></h2>
            <h2>${city }</h2>
            <h2>${dateMsg}</h2>
            <h2>${timeMsg}</h2>
            <h1>${temperature }°C <i class="fas fa-thermometer-half"></i></h1>
            <h3>${weatherCondition } <i class="fas fa-cloud-sun"></i></h3>
            <p><i class="fas fa-tint"></i> Humidity: ${humidity }%</p>
            <p><i class="fas fa-wind"></i> Wind Speed: ${windSpeed } m/s</p>
        </div>
    </div>
    <script src="script1.js"></script>
</body>
</html>


