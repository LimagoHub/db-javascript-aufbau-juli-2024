"use strict";


function init() {

  
    /*
    let myArray = [];

    myArray[0] = 10;
    myArray[20] = 200;
     myArray[20] = 10;

    for (let index = 0; index < myArray.length; index++) {
        console.log(`value = ${myArray[index]} key = ${index} `);
    }
        myArray.forEach((value,key) => {
            console.log("value = " + value + ", key = " + key);
        });

        */
    /*let myDict = {"Mayer": 1000, "Mueller":2000};
    //myDict["Mayer"] = 100;
    //myDict["Schmitt"] = 1000;
    for(let key in myDict) {
        console.log(`value = ${myDict[key]} key = ${key} `);
    }*/

    /*let a = [10,20,30];
    let b = [40,50,60, 70];
    let c =10;
    let myArray = [a, b, c];
    console.log(myArray[2]);
    */

    const messwerte = [];

    let darmstadt = {
        ort: "Darmstadt",
        temp: 10,
        druck: 900,
    }


    const simpson = {
        ort: "Bart Simpson",
        millidooms: 10000
        
    }

    messwerte.push(darmstadt);
    messwerte.push(simpson);

    darmstadt.temp = 20;
    messwerte.push(darmstadt);

    for (const messwert of messwerte) {
        for(const [key, value] of Object.entries(messwert)){
            console.log(`Key = ${key}, Value = ${value}`);
        }
    }

}

init();

