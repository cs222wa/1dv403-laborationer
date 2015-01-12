"use strict";
var PWD = PWD||{};  //Namespace

PWD.Coloring = function(x, y){
    this.WindowConstructor("img/desktop/bscoloringicon.png", "Målarbok", x, y);
    this.desktop = document.getElementById("desktop");
    this.coloringBook();
};

PWD.Coloring.prototype = new PWD.AppWindow();
PWD.Coloring.constructor = PWD.Coloring;
PWD.Coloring.prototype.coloringBook=function(){

};