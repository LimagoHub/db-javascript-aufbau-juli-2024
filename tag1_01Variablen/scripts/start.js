"use strict";


function init() {

    let a = [];
    
    foo(a);
    console.log(a);

    function foo(myValue) {

        a[0]=100;
        
    }
}

