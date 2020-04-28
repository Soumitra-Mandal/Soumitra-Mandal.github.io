function weatherfunc(){
var city= document.getElementById("C").value;
$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&APPID=70207a5efd2148a93db198be86385483",function(data){
console.log(data);
var icon="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = data.main.temp;
var weather = data.weather[0].main;
document.getElementById("weather").innerHTML=weather;
document.getElementById("cityn").innerHTML=city;
document.getElementById("temp").innerHTML=temp + "°C";
$('.icon').attr('src', icon);
});
}
