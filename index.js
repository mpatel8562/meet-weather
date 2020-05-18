
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
            document.getElementById('lon').innerHTML = data.coord.lon;
            document.getElementById('lat').innerHTML = data.coord.lat;
        },
        error: function (eMessage) {
            console.log(eMessage);
        }
    })
}