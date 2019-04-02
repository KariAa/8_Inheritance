//Nämä suoritetaan kun script2.js ladataan sivun lopussa

//B. CONTROL STRUCTURES



//if ja if - else
const ikarajaAikuinen = 18;
var nimiOpiskelija = "Olli Opiskelija";
var ikaOpiskelija = 17;
var lupaOpiskelija;



var nimiOpettaja = "Orpo Opettaja";
var ikaOpettaja = 76;
var lupaOpettaja="Aikuinen, mene katsomaan Star Wars -elokuvaa";

if(ikaOpiskelija < ikarajaAikuinen){
   lupaOpiskelija="Lapsi, syö puuroa";
}else{
    lupaOpiskelija ="Aikuinen, mene pitkälle lounaalle";
}

if(ikaOpettaja < ikarajaAikuinen){l
   lupaOpettaja="Lapsi, mene katsomaan Peppi-elokuvaa";
}



document.getElementById("luvat").innerHTML =
								nimiOpiskelija + " " + ikaOpiskelija + " vuotta: " + 
								lupaOpiskelija +
								"<br>" +
								nimiOpettaja + " " + ikaOpettaja + " vuotta: " + lupaOpettaja;



//if - else if
var pisteet =30;
var arvosana;

if(pisteet<=20){
   arvosana ="hylätty";
}else if(pisteet <=50){
   arvosana ="Keskinkertainen";
}else{
    arvosana="Kiitettävä";
}

document.getElementById("arvosana").innerHTML = pisteet + " pistettä on arvosAna " +
 				arvosana;
 		




//ARRAYS

var persons = ["Virtanen", "Aaltonen", "Nuijanen", "Zetor","Vika"];


var tulostusAlkuperaiset="";
for(var i=0; i< persons.length; i++){
   tulostusAlkuperaiset += persons[i]+"<br>"; // HUOM += lisää uutta tekstiä loppuun
}
document.getElementById("nimet").innerHTML = tulostusAlkuperaiset;








var tulostusAakkostetut="";
persons.sort();
persons.reverse();
for(var i=0; i< persons.length; i++){
   tulostusAakkostetut += persons[i]+"<br>"; // HUOM += lisää uutta tekstiä loppuun
}
document.getElementById("nimetAakkostetut").innerHTML = tulostusAakkostetut;






//while looping

//hae painike, jonka id on draw
var drawButton = document.getElementById("draw"); 
//Tämä koodi suoritetaan kun painiketta klikataan
drawButton.onclick = function () {
	var heittokertoja=0;
	var tulostusHeitot="";
	var noppa1;
	var noppa2;
	do{
	   noppa1=Math.trunc((Math.random() * 5.01) + 1);
	   noppa2=Math.trunc((Math.random() * 5.01) + 1);
	   tulostusHeitot+= noppa1 + " - " + noppa2+ "<br>";
	   heittokertoja++;
	}while(noppa1!=noppa2);  //Heitä uusiksi, jos nopat ERISUURET
	
	    document.getElementById("pari").innerHTML = "Heittoja " + heittokertoja +" <br>" +
			tulostusHeitot;
     }
//Math.random() antaa luvun välillä 0.0 - 0.99999
// *5 luku  0.0 - 5.0001
// +1 luku  1.0 - 6.0001
//trunc katkaisee desimaalit pois luku 1  -  6



