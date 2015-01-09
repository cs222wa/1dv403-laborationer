"use strict";
var pwd = pwd||{};  //Namespace

pwd.AppWindow = function(){ //konstruktor
    //deklarera egenskaper  this.egenskap = 0/false/undefined;
    this.appIcon = undefined;
    this.appTitle = undefined;
    this.contentDiv = undefined;
    this.windowDiv = undefined;
    this.galleryLoading = undefined;
    this.x = undefined;
    this.y = undefined;
};

pwd.AppWindow.prototype.WindowConstructor    = function(icon, title, x, y){ //konstruktor 2
    //initera egneskaperna från första konstruktorn  this.egenskap = egenskap;
    this.appIcon = icon;
    this.appTitle = title;
    this.x = x;
    this.y = y;
    this.renderHTML();
};

pwd.AppWindow.prototype.renderHTML         = function() {
    console.log("writing HTML");
    var base = this;
//Skapa main div
    base.windowDiv = document.createElement("div");
    base.windowDiv.className="appWindow";
    base.windowDiv.style.top=base.y+"px";
    base.windowDiv.style.left=base.x+"px";
//Skapa div för gallery div
    base.contentDiv=document.createElement("div");
    base.contentDiv.className="contentDiv";
//Skapa div för bottom-bar
    var bottomBar = document.createElement("div");
    bottomBar.className="bottomBar";
//skapa loading-gif
    base.loadingImg = document.createElement("img");
    base.loadingImg.setAttribute("src", "js/jsgallery/img/loading.gif");
    base.loadingImg.setAttribute("alt", "Loading bar");
    base.loadingImg.className="loadingBar";
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
    closeWindowButton.setAttribute("src", "js/jsgallery/img/close.png");
    closeWindowButton.setAttribute("alt", "a small cross");
    closeWindowButton.className="closeWindowIcon";
    closingLink.onclick= function(){
        base.closeGallery();
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
//append loading-gif to bottom-bar
    bottomBar.appendChild(base.loadingImg);
//append bottom-bar to main div
    base.windowDiv.appendChild(bottomBar);
//append main div to desktop
    document.querySelector("#desktop").appendChild( base.windowDiv);
};

pwd.AppWindow.prototype.focusAppWindow        = function(){
    var allApps = document.querySelectorAll(".application");
    for(var i = 0; i < allApps.length; i++){
        allApps[i].style.zIndex = "1";
    }
    this.style.zIndex = "5";
};