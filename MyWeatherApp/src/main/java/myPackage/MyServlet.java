package myPackage;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class MyServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public MyServlet() {
        super();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String apiKey = "c9d7f6e7e27c01c739eb89f8dc2322c0";
        String city = request.getParameter("city");
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

        URL url = new URL(apiUrl);
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");

        InputStream inputStream = connection.getInputStream();
        InputStreamReader reader = new InputStreamReader(inputStream);
        StringBuilder responseContent = new StringBuilder();
        Scanner scanner = new Scanner(reader);

        while(scanner.hasNext()) {
            responseContent.append(scanner.nextLine());
        }
        scanner.close();

        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(responseContent.toString(), JsonObject.class);

        long dateTimestamp = jsonObject.get("dt").getAsLong() * 1000;
        Date dateTime = new Date(dateTimestamp);
        String dateMsg = new SimpleDateFormat("yyyy-MM-dd").format(dateTime);
        String timeMsg = new SimpleDateFormat("HH:mm:ss").format(dateTime);

        double temperatureKelvin = jsonObject.getAsJsonObject("main").get("temp").getAsDouble();
        int temperatureCelsius = (int) (temperatureKelvin - 273.15);

        int humidity = jsonObject.getAsJsonObject("main").get("humidity").getAsInt();
        double windSpeed = jsonObject.getAsJsonObject("wind").get("speed").getAsDouble();
        String weatherCondition = jsonObject.getAsJsonArray("weather").get(0).getAsJsonObject().get("main").getAsString();

        JsonObject weatherData = new JsonObject();
        weatherData.addProperty("city", city);
        weatherData.addProperty("temperature", temperatureCelsius);
        weatherData.addProperty("weatherCondition", weatherCondition);
        weatherData.addProperty("humidity", humidity);
        weatherData.addProperty("windSpeed", windSpeed);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(gson.toJson(weatherData));

        connection.disconnect();
    }
}
