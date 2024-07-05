"use strict"

/*
    Signatur
        Modulname
        Klassenname (Fachliche Beschreibung)
        constructor => Parameter
        public methods (name, parameter, rueckgabe, verhalten im Fehlerfall, Fachliche Beschreibung) 
*/
class MenuBar {
    #ulElement = undefined;

    constructor(id) {
        
        let divElement = document.querySelector(id);
        if(divElement)
        {
            this.#ulElement = document.createElement("UL");
            divElement.append(this.#ulElement);
        } else {
            throw "Div Element nicht gefunden";
        }

    }

    addMenu(menu) {
        this.#ulElement.appendChild(menu.liElement);
        this.#ulElement.appendChild(menu.ulElement);
    }
}

class Menu {
    #ulElement = undefined;
    #liElement = undefined;
    constructor(label) {

        this.#ulElement = document.createElement("UL");
        this.#ulElement.style.display="none";

        let me = this;

        this.#liElement = document.createElement("LI");
        this.#liElement.appendChild(document.createTextNode(label));
        this.#liElement.addEventListener(
                "click", 
                function(e){
                    this.parentNode.querySelectorAll("UL").forEach(element => {
                        element.style.display="none";
                    });
                    me.ulElement.style.display="";
                }
        );
    }
    addMenuItem(menuItem) {
        this.ulElement.appendChild(menuItem.liElement);
        
    }
    get liElement () {
        return this.#liElement;
    }
    get ulElement () {
        return this.#ulElement;
    }

}

class MenuItem {
    #liElement = undefined;
    constructor(label, callback) {
        this.#liElement = document.createElement("LI");
        this.#liElement.appendChild(document.createTextNode(label));
        this.#liElement.addEventListener("click", callback);
    }
    get liElement () {
        return this.#liElement;
    }
}

export {MenuBar, Menu, MenuItem}