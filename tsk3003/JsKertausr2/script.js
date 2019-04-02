//Nämä suoritetaan kun script.js ladataan sivun lopussa

//A. BASICS OF JAVASCRIPT
//Muuttujat
//Keskiarvo

var nimiA = "Kalle Kustaa Korkki";
var nimiB = "Maija Poppanen";
var ikaA = 75;
var ikaB =14.5;
// lukujen kanssa + operaattori on yhteenlasku
var keskiIka = (ikaA + ikaB) /2;
//Hae elementti ja kirjoitan sen sisältämäksi tekstiksi 
//muuttujan keski-ikä arvo

document.getElementById("keskiarvo").innerHTML = keskiIka;
    
//Merkkijonot
//Merkkijonojen kanssa + on merkkijonojen yhdistämistä

document.getElementById("merkkijono").innerHTML = nimiA + " " + ikaA + 
    " ja " + nimiB + " " + ikaB + " ovat keski-iältään " + keskiIka + " vuotta";


//Painoindeksi
var paino = 83;
var pituus = 180;
var bmi = laskeBMI(paino, pituus);
document.getElementById("bmi").innerHTML = bmi;


//oma funktio
function laskeBMI(weight, height){  //kg  cm
    var painoIndeksi = weight/((height/100) * (height/100));
    return painoIndeksi;
}

//Painoindeksi 2:lla desimaalilla
var bmi2D = bmi.toFixed(2);
document.getElementById("bmi2D").innerHTML = "Paino " + paino + 
    " kg, pituus " + pituus + " m => bmi = " + bmi2D;

//OMIA funktioita
/*
Painoindeksi on paino jaettuna pituuden neliöllä. Paino kg, pituus m.
*/


//Painikkeiden klikkaus
//Haetaan painike
var myButton = document.getElementById("nameButton");

myButton.onclick = function(){
    var nimesi = prompt("Anna nimesi");
    alert("Nimessä " + nimesi + " on " + nimesi.length + " kirjainta");
}

