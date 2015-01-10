"use strict";
var pwd = pwd||{};  //Namespace
pwd.Main = {
    appCounterY: 0,
    appCounterX: 0,
    calcX : function(countApps){
        return (countApps*30)+25;
    },
    calcY : function(countApps){
        return (countApps*30)+50;
    },
    init: function(){
        document.getElementById("gallerylink").onclick=function(){
            new pwd.Gallery(pwd.Main.calcX(pwd.Main.appCounterX), pwd.Main.calcY(pwd.Main.appCounterY)); //fönster-förskjutning baserat på antalet fönster.
            pwd.Main.appCounterY++;
            pwd.Main.appCounterX++;
            if(pwd.Main.appCounterY >= 15){
                pwd.Main.appCounterY = 0;
                pwd.Main.calcY(pwd.Main.appCounterY);
            }
            if(pwd.Main.appCounterX >= 45){
                pwd.Main.appCounterX = 0;
                pwd.Main.calcX(pwd.Main.appCounterX);
            }
            return false
        };
    }
};
window.onload = pwd.Main.init;