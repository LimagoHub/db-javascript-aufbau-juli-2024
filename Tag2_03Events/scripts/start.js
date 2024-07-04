"use strict";


function doIt() {
    alert("Es geht");
}

function init() {

    let pElement = document.querySelector("#MyP");
    if(pElement) {
        //pElement.onclick = doIt;
        pElement.addEventListener("click", function(e){
            // Achtung this ist this des Events und nicht der umhuellenden Klasse
            this.style.backgroundColor = "red";
        });
    }
}

