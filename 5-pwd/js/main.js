"use strict";
var PWD = PWD||{};  //Namespace
PWD.Main = {
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
            new PWD.Gallery(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY)); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            if(PWD.Main.appCounterY >= 15){
                PWD.Main.appCounterY = 0;
                PWD.Main.calcY(PWD.Main.appCounterY);
            }
            if(PWD.Main.appCounterX >= 45){
                PWD.Main.appCounterX = 0;
                PWD.Main.calcX(PWD.Main.appCounterX);
            }
            return false
        };
        document.getElementById("rsslink").onclick=function(){
            console.log(PWD.RSS);
            new PWD.RSS(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY)); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            if(PWD.Main.appCounterY >= 15){
                PWD.Main.appCounterY = 0;
                PWD.Main.calcY(PWD.Main.appCounterY);
            }
            if(PWD.Main.appCounterX >= 45){
                PWD.Main.appCounterX = 0;
                PWD.Main.calcX(PWD.Main.appCounterX);
            }
            return false
        }
    }
};
window.onload = PWD.Main.init;