//Nämä suoritetaan kun script2.js ladataan sivun lopussa

//B. CONTROL STRUCTURES
const ikaRaja =18;
var ikaA = 17;
var lupaus = "Ei tiiä";
//Pääsetkö pubiin?
if(ikaA >= ikaRaja){
    lupaus="Anna palaa jos on rahaa";
}
document.getElementById("lupa").innerHTML = lupaus;
//if ja if - else
var ikaB =20;
//Syötkö illalla puuroa vai otatko oluen?
var iltaLupaus="";
var aidinLupa = false;
if(ikaB<ikaRaja){
   //PUURO
   iltaLupaus="Syö puuroo ja mene nukkumaan";
}else{
    //OLUT
    if(aidinLupa ===true){
      iltaLupaus ="Ota saunaolut ja lähe pubiin - äidiltä on lupa";
    }else{
       iltaLupaus ="Syö puuroa  etkä pubiin - äidiltä ei ole lupaa"; 
    }
    
}
document.getElementById("luvat").innerHTML = iltaLupaus;
//if - else if
// alle 10 p => hylätty, 10 - 19 läpi, 20 - 30 kiitettävä
var pisteet =20;
if(pisteet < 10){
   mitenMeni = pisteet + " pistettä antaa arvosanan hylätty";
}else if(pisteet <20){
   mitenMeni = pisteet + " pistettä antaa arvosanan läpi";
}else{
   mitenMeni = pisteet + " pistettä antaa arvosanan kiitettävä"; 
}
document.getElementById("arvosana").innerHTML = mitenMeni;   
//ARRAYS  -- JATKA TÄSTÄ ENSIKERRALLA!!!!!!!!!!

//while looping

