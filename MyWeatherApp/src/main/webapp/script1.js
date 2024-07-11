// Weather condition background images
const weatherImages = {
    Clear: 'https://source.unsplash.com/1600x900/?clear',
    Clouds: 'https://source.unsplash.com/1600x900/?cloudy',
    Rain: 'https://source.unsplash.com/1600x900/?rain',
    Mist: 'https://source.unsplash.com/1600x900/?mist',
    Snow: 'https://source.unsplash.com/1600x900/?snow',
    Haze: 'https://source.unsplash.com/1600x900/?haze'
};

// Function to get a random weather condition
function getRandomWeather() {
    const conditions = Object.keys(weatherImages);
    const randomIndex = Math.floor(Math.random() * conditions.length);
    return conditions[randomIndex];
}

// Function to change background image based on weather condition
function changeBackground() {
    const weather = getRandomWeather();
    document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${weatherImages[weather]}')`;
    document.body.style.transition = 'background-image 1s ease';
}

// Initial call to change background
changeBackground();

// Change background every 10 seconds
setInterval(changeBackground, 10000);
