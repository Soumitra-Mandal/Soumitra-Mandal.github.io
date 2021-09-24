
function weatherfunc(){
var city= document.getElementById("C").value;
$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&APPID=0290ed9eafcde113b27e2859a7f63fb1",function(data){
console.log(data);
var temp = data.main.temp;
var weather = data.weather[0].main;
document.getElementById("weather").innerHTML=weather;
document.getElementById("cityn").innerHTML=city;
document.getElementById("temp").innerHTML=temp + "°C";
});
}
