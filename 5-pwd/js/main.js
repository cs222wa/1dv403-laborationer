"use strict";
var PWD = PWD||{};  //Namespace
PWD.Main = {
    appCounterY: 0,
    appCounterX: 0,
    calcX : function(countApps){
        var maxWidth = window.innerWidth-600;
        //console.log("bredd: " + (maxWidth / (countApps*30)));
        if((maxWidth / (countApps*30)) >= 1){
            return (countApps*30)+25;
        }
        else{
            PWD.Main.appCounterX = 0;
        }
    },
    calcY : function(countApps){
        var maxHeight = window.innerHeight-600;
       // console.log("höjd: "+ (maxHeight / (countApps*30)));
        if((maxHeight / (countApps*30)) >= 1){
            return (countApps*30)+50;
        }
        else{
            PWD.Main.appCounterY = 0;
        }
    },
    init: function(){
        document.getElementById("gallerylink").onclick=function(){
            new PWD.Gallery(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY)); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        };
        document.getElementById("rsslink").onclick=function(){
            console.log(PWD.RSS);
            new PWD.RSS(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY)); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        }
    }
};
window.onload = PWD.Main.init;