"use strict";


function doIt() {
    alert("Es geht");
}

function init() {

    /*let pListe = document.querySelectorAll("P");

    for( let pElement of pListe){
        pElement.addEventListener("mouseover", function(e){
            // Achtung this ist this des Events und nicht der umhuellenden Klasse
            this.style.backgroundColor = "red";
        });
        pElement.addEventListener("mouseout", function(e){
            // Achtung this ist this des Events und nicht der umhuellenden Klasse
            this.style.backgroundColor = "yellow";
        });
    }
*/
    let pElement = document.querySelector("#MyP");
   
    pElement.addEventListener("click",function(e) {
        
        alert("Ich bin P"); }, false
        
    );
  

    let divElement = document.querySelector("#MyDiv");
   
    divElement.addEventListener("click",function(e) {
   
        alert("Ich bin Div");}, true
    );
    let formElement = document.querySelector("#MyForm");
   
    formElement.addEventListener("submit",function(e) {
       
        }, false
    );
  
}

