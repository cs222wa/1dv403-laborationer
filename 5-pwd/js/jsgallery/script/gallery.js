"use strict";
var Gallery = {

    desktop : undefined ,
    windowDiv : undefined,

    init: function(){

//Skapa main div
        Gallery.desktop = document.getElementById("desktop");
        Gallery.windowDiv = document.createElement("div");
        Gallery.windowDiv.className="gallerywindow";
//Skapa div för bottom-bar
        var bottomBar = document.createElement("div");
        bottomBar.className="bottombar";
//Skapa div för top-bar
        var topBar = document.createElement("div");
        topBar.className="topbar";
//Skapa elemnt att lägga i top-bar
//skapa icon
        var galleryIcon = document.createElement("img");
        galleryIcon.setAttribute("src", "img/desktop/bsgalleryicon.png");
        galleryIcon.setAttribute("alt", "gallery icon");
        galleryIcon.className="galleryIcon";
//skapa text
        var galleryText = document.createElement("p");
        galleryText.innerHTML="Bildgalleri";
        galleryText.className="galleryWindowHeader";
//skapa a href
        var closingLink=document.createElement("a");
        closingLink.setAttribute('href', '#');
//skapa close-img
        var closeWindowButton = document.createElement("img");
        closeWindowButton.setAttribute("src", "js/jsgallery/img/close.png");
        closeWindowButton.setAttribute("alt", "a small cross");
        closeWindowButton.className="closeWindowIcon";
        closingLink.onclick=Gallery.closeGallery;
//append close-img to a href
        closingLink.appendChild(closeWindowButton);
//append icon to top-bar
        topBar.appendChild(galleryIcon);
//append text to top-bar
        topBar.appendChild(galleryText);
//append ahref to top-bar
        topBar.appendChild(closingLink);
//append top-bar to main div
        Gallery.windowDiv.appendChild(topBar);
//append bottom-bar to main div
        Gallery.windowDiv.appendChild(bottomBar);
//append main div to desktop

        //Gallery.windowDiv.appendChild(closingLink);
        //Gallery.windowDiv.appendChild(galleryIcon);
        Gallery.desktop.appendChild( Gallery.windowDiv);
        return false;

    },

    renderGallery: function(galleryBg){

    },

    closeGallery: function(){
        Gallery.windowDiv.parentNode.removeChild( Gallery.windowDiv);

}
};







