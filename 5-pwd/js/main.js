"use strict";
var Main = {
    init: function(){
        document.getElementById("gallerylink").onclick=Gallery.init;
        //Skicka onclick till window-konstruktor i main.js och
        // där skapa div-taggen och tilldela egenskaperna width, height, bg-color
        //och sedan skicka window-objektet till Gallery.init och appenda där istället?
    }
};

window.onload = Main.init;


// skapa div-fönster först

// onlick länk - skapa ny applikation - specifik per länk


// använd arv så att minimera kod för att undvika upprepning
