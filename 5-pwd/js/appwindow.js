"use strict";
var pwd = pwd||{};  //Namespace

pwd.AppWindow = function(){ //konstruktor
    //deklarera egenskaper  this.egenskap = 0/false/undefined;
};

pwd.AppWindow.prototype.WindowConstructor    = function(type, resizable, self, xPos, yPos){ //konstruktor 2
    //initera egneskaperna från första konstruktorn  this.egenskap = egenskap;
    this.renderHTML();
};

pwd.AppWindow.prototype.renderHTML         = function() {
    var base = this;
//Skapa main div
    base.application = document.createElement("div");
    base.application.classList.add("appwindow");
    base.application.style.left = this.xPos + "px";
    base.application.style.top = this.yPos + "px";
    base.application.style.zIndex = "10";
    base.application.onmousedown = this.focusAppWindow;

//Skapa div för app innehåll
    base.appContentDiv = document.createElement("div");
    base.appContentDiv.className = "appcontentdiv";

//Skapa div för bottom-bar
    var bottomBar = document.createElement("div");
    bottomBar.className = "bottombar";

//skapa loading-gif
    base.loadingBar = document.createElement("img");
    base.loadingBar.setAttribute("src", "img/loading.gif");
    base.loadingBar.setAttribute("alt", "Loading bar");
    base.loadingBar.className = "loadingbar";

//Skapa div för top-bar
    var topBar = document.createElement("div");
    topBar.className = "topbar";

//Skapa element att lägga i top-bar
//skapa icon
    var appIcon = document.createElement("img");
    appIcon.setAttribute("src", "img/desktop/bsgalleryicon.png");
    appIcon.setAttribute("alt", "gallery icon");
    appIcon.className = "appIcon";

    /*
     //skapa text
     var appHeaderText = document.createElement("p");
     appHeaderText.innerHTML="Bildgalleri";
     appHeaderText.className="appWindowHeader";
     */

//skapa a href
    var closingLink = document.createElement("a");
    closingLink.setAttribute('href', '#');
//skapa close-img
    var closeWindowButton = document.createElement("img");
    closeWindowButton.setAttribute("src", "img/close.png");
    closeWindowButton.setAttribute("alt", "a small cross");
    closeWindowButton.className = "closeWindowIcon";
    closingLink.onclick = function () {
        base.closeGallery();
        return false;
    };
//append close-img to a href
    closingLink.appendChild(closeWindowButton);
//append icon to top-bar
    topBar.appendChild(appIcon);

    /*
     //append text to top-bar
     topBar.appendChild(galleryText);
     */

//append ahref to top-bar
    topBar.appendChild(closingLink);
//append top-bar to main div
    base.windowDiv.appendChild(topBar);
//append window div to main div
    base.windowDiv.appendChild(base.appContentDiv);
//append loading-gif to bottom-bar
    bottomBar.appendChild(base.loadingBar);
//append bottom-bar to main div
    application.appendChild(bottomBar);
//append main div to desktop
    //Gallery.windowDiv.appendChild(closingLink);
    //Gallery.windowDiv.appendChild(galleryIcon);
    this.desktop.appendChild(base.application);
    return false;
//this.img + "close.png"  ??
};

pwd.AppWindow.prototype.focusAppWindow        = function(){
    var allApps = document.querySelectorAll(".application");
    for(var i = 0; i < allApps.length; i++){
        allApps[i].style.zIndex = "1";
    }
    this.style.zIndex = "5";
};