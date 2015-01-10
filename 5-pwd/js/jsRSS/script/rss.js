"use strict";
var PWD = PWD||{};  //Namespace


PWD.RSS = function(x, y){
    this.WindowConstructor("img/desktop/bsrssicon.png", "RSS", x, y);
    this.desktop = document.getElementById("desktop");
    this.renderRSS();
};


PWD.RSS.prototype = new PWD.AppWindow();
PWD.RSS.constructor = PWD.RSS;
PWD.RSS.prototype.renderRSS=function(){
console.log("RSS rendered");
};