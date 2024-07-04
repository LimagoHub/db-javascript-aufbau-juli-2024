"use strict"

/*
    Signatur
        Modulname
        Klassenname (Fachliche Beschreibung)
        constructor => Parameter
        public methods (name, parameter, rueckgabe, verhalten im Fehlerfall, Fachliche Beschreibung) 
*/
class MenuBar {
    constructor(id) {
        console.log("Ctor MenuBar")
    }

    addMenu(menu){
        console.log("AddMenu")
    }
}

class Menu {
    constructor(label) {
        console.log("Ctor Menu " + label)
    }

    addMenuItem(menuItem) {
        console.log("AddMenuItem")
    }
}

class MenuItem {
    constructor(label, callback) {
        console.log("Ctor MenuItem " + label)
    }
}

export {MenuBar, Menu, MenuItem}