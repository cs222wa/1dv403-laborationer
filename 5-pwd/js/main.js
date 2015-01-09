"use strict";
var pwd = pwd||{};  //Namespace
pwd.Main = {

    appCounter: 0,

    calcX : function(){
        //window.innerHeight;
        return (pwd.Main.appCounter*30)+50;
    },

    calcY : function(){
        return (pwd.Main.appCounter*30)+50;
    },

    init: function(){
        document.getElementById("gallerylink").onclick=function(){

            new pwd.Gallery(pwd.Main.calcX(), pwd.Main.calcY()); //fönster-förskjutning baserat på antalet fönster.
            pwd.Main.appCounter++;
            if(pwd.Main.appCounter == 5){
                pwd.Main.appCounter= 0;
            }
            return false
        };

        //"Bounce" applicationerna från fönstrets kanter.
        //När pwd.Main.appcounter == x antal - sätt appcounter till
        // (pwd.Main.appCounter*15)+25; (hälften av förra eller halva mer än förra?)  (pwd.Main.appCounter*45)+75;
    }
};

window.onload = pwd.Main.init;

// skapa div-fönster först
// onlick länk - skapa ny applikation - specifik per länk
// använd arv så att minimera kod för att undvika upprepning
