"use strict";

import {MenuBar, Menu, MenuItem} from "./modules/menu.mjs"

document.addEventListener("DOMContentLoaded", init) ;

function init() {
try {
    let menu;
    let menuItem;

    const menuBar = new MenuBar("#MyMenuBar") ;

    menu = new Menu("Datei");

    menuItem = new MenuItem("Speichern", (e)=>alert("speichern"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Laden", (e)=>alert("laden"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Beenden", (e)=>alert("beenden"));
    menu.addMenuItem(menuItem);

    menuBar.addMenu(menu)

    menu = new Menu("Bearbeiten");

    menuItem = new MenuItem("Suchen", (e)=>alert("suchen"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Ersetzen", (e)=>alert("ersetzen"));
    menu.addMenuItem(menuItem);


    menuBar.addMenu(menu);

    
    menu = new Menu("Hilfe");

    menuItem = new MenuItem("Online", (e)=>alert("online"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Offline", (e)=>alert("offline"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Telefonjoker", (e)=>alert("telefonjoker"));
    menu.addMenuItem(menuItem);



    menuBar.addMenu(menu);

} catch(error) {
    console.log(error);
}





   
}

