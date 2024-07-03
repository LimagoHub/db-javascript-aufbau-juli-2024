"use strict";


function init() {
    try {
        peter();
    } catch(error) {
        
    }
    
}

function peter() {

    try {
        initImpl();
    } catch(error) {
        throw ["Meine fachliche Meldung",error];
    }
   


    function initImpl() {
        boese(0);
        noch_boeser(true);
        am_boesesten(false);
    }
}


function boese(flag) {
    if(flag)
        throw "Upps";
    return;
}
function noch_boeser(flag) {
    if(flag)
        throw "Upps1";
    return;
}

function am_boesesten(flag) {
    if(flag)
        throw "Upps2";
    return;
}


init();

