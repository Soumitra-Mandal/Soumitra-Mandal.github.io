
function weatherfunc(){
var city= document.getElementById("C").value;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&APPID=f88972d83df149fc5c21ed06a1757053",function(data, status, xhr){
xhr.withCredentials = true;
var temp = data.main.temp;
var weather = data.weather[0].main;
document.getElementById("weather").innerHTML=weather;
document.getElementById("cityn").innerHTML=city;
document.getElementById("temp").innerHTML=temp + "°C";
});
}
