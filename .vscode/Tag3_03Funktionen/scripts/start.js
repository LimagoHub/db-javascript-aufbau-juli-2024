"use strict";

function add(a,b) {
    return a + b;
}
function sub(a,b) {
    return a - b;
}
function mult(a,b) {
    return a * b;
}

var div = (a,b) =>{
    return a / b;
};



function init() {

    let monster = {
        "sound": "Arrgh",
        "make_sound": function() { // Korrekt. "This" ist im Scope
            console.log(this.sound);
        }
       /* "make_sound": ()=> { // Geht nicht. "This" nicht im Scope
            console.log(this.sound);
        }*/ 
    }

    //monster.make_sound();

  /* let operations = [add, mult, div];

   let a =10;
   let b = 20;

   for (const operation of operations) {
    console.log(operation(a,b));
   }
    */
  /* for (let index = 0; index < operations.length; index++) {
    
    console.log(operations[index](a,b));
   }
  */

   var piggy = new Schwein("Miss Piggy");
   var babe = new Schwein("Babe");
   
   piggy.setName("XYZ");
   piggy.farbe = "rosa";

   console.log(babe.getName());
}

function Schwein(name) {
    this._name = name;
    let _gewicht = 10;

    this.setName = function(neuername) {
        this._name = neuername;
    }
    
    this.getName = function() {
       return this._name;
    }
    
}

init();

