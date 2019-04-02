//Nämä suoritetaan kun script2.js ladataan sivun lopussa

//B. CONTROL STRUCTURES
//if
var ikaA = 20;
const ikaRaja = 18;
var lupaus="Syö puuroa ja juo limua";
if(ikaA>=ikaRaja){
   lupaus="Ota vapaata ja lähde pubiin";   
}
document.getElementById("lupa").innerHTML = lupaus;

lupaus="Syö puuroa ja juo limua";
//loogisia operaattoreita && on AND  || OR
var vaimonLupa = false;
if((ikaA>=ikaRaja) && vaimonLupa){
   lupaus="Ota vapaata ja lähde pubiin";   
}else{
   lupaus="Syö puuroa ja juo limua";
}
document.getElementById("luvat").innerHTML = lupaus;

//if - else if
//pisteet alle 10 ==> hylätty, 10 - 19==> hyvä, 20 - ==> kiitettävä
var pisteet = 30;
var arvosana = "undefined";
if(pisteet<10){
   arvosana="hylätty";
}else if(pisteet <20){
   arvosana="hyvä";      
}else{
   arvosana="kiitettävä"; 
}
document.getElementById("arvosana").innerHTML = pisteet + 
    " pistettä, arvosana on " + arvosana;
//ARRAYS - JATKETAAN ENSIKERRALLA

//while looping

