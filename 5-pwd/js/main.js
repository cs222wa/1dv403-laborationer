"use strict";
var PWD = PWD||{};  //Namespace
PWD.Main = {
    appCounterY: 0,
    appCounterX: 0,
    calcX : function(countApps){
        var maxWidth = window.innerWidth-600;
        if((maxWidth / (countApps*30)) >= 1){
            return (countApps*30)+25;
        }
        else{
            PWD.Main.appCounterX = 0;
        }
    },
    calcY : function(countApps){
        var maxHeight = window.innerHeight-600;
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
        document.getElementById("newslink").onclick=function(){
            var headerTitle = "Nyheter - Sverige";
            var feedUrl= "http://www.dn.se/nyheter/sverige/m/rss";
            var icon = "img/desktop/bsrssnewsicon.png";
            new PWD.RSS(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY), headerTitle, icon, feedUrl); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        };
        document.getElementById("culturelink").onclick=function() {
            var headerTitle = "Kultur och Nöje";
            var feedUrl = "http://www.dn.se/kultur-noje/m/rss";
            var icon = "img/desktop/bsrsscultureicon.png";
            new PWD.RSS(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY), headerTitle, icon, feedUrl); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        };
        document.getElementById("sportslink").onclick=function() {
            var headerTitle = "Sport";
            var feedUrl = "http://www.dn.se/sport/m/rss";
            var icon = "img/desktop/bsrsssporticon.png";
            new PWD.RSS(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY), headerTitle, icon, feedUrl); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        };
        document.getElementById("memorylink").onclick=function() {
            var headerTitle = "Memory";
            var icon = "img/desktop/bsmemoryicon.png";
            new PWD.MemoryGame(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY), headerTitle, icon); //fönster-förskjutning baserat på antalet fönster.
            PWD.Main.appCounterY++;
            PWD.Main.appCounterX++;
            return false
        };
    }
};
window.onload = PWD.Main.init;