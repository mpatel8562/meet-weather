
function getweatherData() {
    var city = document.getElementById('city').value;
    var baseURL = "http://api.openweathermap.org/data/2.5/weather?q="
    var tailURL = "&appid=4e8fe55b900263c5f83603ed631e15ad";
    var finalURL = baseURL + city + tailURL;
    console.log(finalURL);
    $.ajax({
        url: finalURL,
        success: function (data) {
            console.log(finalURL);
            console.log(data);
            document.getElementById('coun').innerHTML = data.sys.country;
            document.getElementById('lon').innerHTML = data.coord.lon;
            document.getElementById('lat').innerHTML = data.coord.lat;
            document.getElementById('temp').innerHTML = data.main.temp;
            document.getElementById('min').innerHTML = data.main.temp_min;
            document.getElementById('max').innerHTML = data.main.temp_max;
            document.getElementById('humi').innerHTML = data.main.humidity;
            document.getElementById('press').innerHTML = data.main.pressure;
            document.getElementById('wind').innerHTML = data.wind.speed;
            document.getElementById('deg').innerHTML = data.wind.deg;
        },
        error: function (eMessage) {
            console.log(eMessage);
        }
    })
}