//Nämä suoritetaan kun script.js ladataan sivun lopussa

//A. BASICS OF JAVASCRIPT


//Merkkijonot
var etunimi =
                "Kalle Kustaa";
var sukunimi ="Korkki";
var ika = 76;

document.getElementById("merkkijono").innerHTML = etunimi +" " + 
    sukunimi + ", " + ika + " vuotta.";

//Keskiarvo
var ikaA = 57;
var ikaB = 17;
var ikaC = 12;

var ka = (ikaA + ikaB + ikaC) / 3;
//Haetaan elementti jonka id = "keskiarvo"
document.getElementById("keskiarvo").innerHTML = ka;
//Painoindeksi


var pituusCm = 180;
var painoKg = 98;
var bmiLaskettu = calculateBmi(painoKg, pituusCm); 
//Haetaan elementti jonka id = "bmi"
document.getElementById("bmi").innerHTML = bmiLaskettu;

//Painoindeksi 2:lla desimaalilla

var bmiLaskettu2D = bmiLaskettu.toFixed(2);

document.getElementById("bmi2D").innerHTML = bmiLaskettu2D;

var bmiLaskettu3D = calculateBmi(100, 200).toFixed(3);

document.getElementById("bmi3D").innerHTML = bmiLaskettu3D;

//OMIA funktioita
function calculateBmi(weight, height){
    //HUOM. Muunna pituus senteistä metreiksi
    var bmi =weight / ((height/100)*(height/100));  
    //Palauta vastaus
    return bmi;                                 
}

/*
Painoindeksi on paino jaettuna pituuden neliöllä. Paino kg, pituus m.
*/


//Painikkeiden klikkaus
//haetaan painike
var painike = document.getElementById("meButton");
painike.onclick = function(){
    var name = prompt("Your name?");
    alert("Nimessäsi " + name + " on " + name.length);
}

