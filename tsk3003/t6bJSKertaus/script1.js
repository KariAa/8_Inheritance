//Nämä suoritetaan kun script.js ladataan sivun lopussa

//A. BASICS OF JAVASCRIPT


//Merkkijonot
var etunimi ="Kalle";
var sukunimi ="Aaltonen";
var ika = 76;

document.getElementById("merkkijono").innerHTML =
								etunimi + " " + sukunimi + ", " + ika + " vuotta";

//Keskiarvo
var etaisyysPosti = 30;
var etaisyysAlko = 59;
var etaisyysKoulu =18;
var keskiMatkaPalveluihin = (etaisyysPosti + etaisyysAlko + etaisyysKoulu) / 3;

document.getElementById("keskiarvo").innerHTML =  keskiMatkaPalveluihin + " km";

//Painoindeksi
 document.getElementById("bmi").innerHTML = calculateBMI(180, 83);

//OMIA funktioita
/*
Painoindeksi on paino jaettuna pituuden neliöllä. Paino kg, pituus m.
*/
function calculateBMI(height, weight){
   var bodyMassIndex = weight / (( (height/100) * (height/100) ));
   return bodyMassIndex;
}
//Painoindeksi 2:lla desimaalilla
var bmi =calculateBMI(190,100);
document.getElementById("bmi2D").innerHTML = bmi.toFixed(2);




//Painikkeiden klikkaus

var myButton = document.getElementById("timeButton"); 

myButton.onclick = function () {
    var d = new Date();
	var name = prompt('Today: ' + d +"\nYour name?", 'Matti');
	var letters = name.length;
	alert(name + ', there are ' + letters + ' letters in your username!');
}


