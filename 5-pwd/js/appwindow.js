"use strict";
var PWD = PWD||{};  //Namespace
PWD.AppWindow = function(){ //konstruktor
    //deklarera egenskaper  this.egenskap = 0/false/undefined;
    this.appIcon = undefined;
    this.appTitle = undefined;
    this.contentDiv = undefined;
    this.windowDiv = undefined;
    this.bottomBar = undefined;
    this.x = undefined;
    this.y = undefined;
};
PWD.AppWindow.prototype.WindowConstructor = function(icon, title, x, y, imageWidth, imageHeight){ //konstruktor 2
    //initera egneskaperna från första konstruktorn  this.egenskap = egenskap;
    this.appIcon = icon;
    this.appTitle = title;
    this.x = x;
    this.y = y;
    this.imgWidth = imageWidth;
    this.imgHeight = imageHeight;
    this.renderHTML();
};
PWD.AppWindow.prototype.renderHTML = function() {
    console.log("writing HTML");
    var base = this;
//Skapa main div
    base.windowDiv = document.createElement("div");
    base.windowDiv.className="appWindow";
    base.windowDiv.style.top=base.y+"px";
    base.windowDiv.style.left=base.x+"px";
    base.windowDiv.style.width = base.imgWidth || 550+"px";
    base.windowDiv.style.height = base.imgHeight|| 500+"px";
//Skapa div för gallery div
    base.contentDiv=document.createElement("div");
    base.contentDiv.className="contentDiv";
//Skapa div för bottom-bar
    base.bottomBar = document.createElement("div");
    base.bottomBar.className="bottomBar";
    base.bottomBar.id="bottomDiv";
//Skapa div för top-bar
    var topBar = document.createElement("div");
    topBar.className="topBar";
//Skapa element att lägga i top-bar
//skapa icon
    var appIcon = document.createElement("img");
    appIcon.setAttribute("src", base.appIcon);
    appIcon.setAttribute("alt", "gallery icon");
    appIcon.className="appIcon";
//skapa text
    var headerText = document.createElement("p");
    headerText.innerHTML=base.appTitle;
    headerText.className="windowHeader";
//skapa a href
    var closingLink=document.createElement("a");
    closingLink.setAttribute('href', '#');
//skapa close-img
    var closeWindowButton = document.createElement("img");
    closeWindowButton.setAttribute("src", "img/close.png");
    closeWindowButton.setAttribute("alt", "a small cross");
    closeWindowButton.className="closeWindowIcon";
    closingLink.onclick= function(){
        base.closeWindow();
        return false;
    };
//append close-img to a href
    closingLink.appendChild(closeWindowButton);
//append icon to top-bar
    topBar.appendChild(appIcon);
//append text to top-bar
    topBar.appendChild(headerText);
//append ahref to top-bar
    topBar.appendChild(closingLink);
//append top-bar to main div
    base.windowDiv.appendChild(topBar);
//append galleryDiv to main div
    base.windowDiv.appendChild(base.contentDiv);
//append bottom-bar to main div
    base.windowDiv.appendChild(base.bottomBar);
//append main div to desktop
    document.querySelector("#desktop").appendChild( base.windowDiv);
};

PWD.AppWindow.prototype.setLoadStatus = function(status){
    /*var base = this;    // Vart pekar "this?" PWD.Gallery.prototype.renderGallery?? requestGallery.onreadystatechange??
    console.log(this);
    base.bottomBar.appendChild(status);
    */
    this.bottomBar.appendChild(status);

    //var bottom = document.getElementById("bottomDiv");
   // bottom.appendChild(status);
   // console.log(status);
};

PWD.AppWindow.prototype.removeLoadstatus = function(){
    var item = document.getElementById("load");
    console.log(item);
    item.parentNode.removeChild(item);
    console.log("loadingbar removed");
};


PWD.AppWindow.prototype.focusAppWindow  = function(){
    var allApps = document.querySelectorAll(".application");
    for(var i = 0; i < allApps.length; i++){
        allApps[i].style.zIndex = "1";
    }
    this.style.zIndex = "5";
};

PWD.AppWindow.prototype.closeWindow = function(){
    var base = this;
    base.windowDiv.parentNode.removeChild(base.windowDiv);
};
