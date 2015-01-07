"use strict";
var Main = {
    init: function(){
       document.getElementByID("gallerylink").onclick= Main.galleryWindow();
    },
    galleryWindow: function(){
        var desktop = document.getElementById("desktop");
        var windowDiv = document.createElement("div");
        windowDiv.className="window";
        desktop.appendChild(windowDiv);
    }
};

window.onload = Main.init;


// skapa div-fönster först

// onlick länk - skapa ny applikation - specifik per länk


// använd arv så att minimera kod för att undvika upprepning
