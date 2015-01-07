"use strict";
var Gallery = {

    desktop : undefined ,
    windowDiv : undefined,

    init: function(){
        Gallery.desktop = document.getElementById("desktop");
        Gallery.windowDiv = document.createElement("div");
        Gallery.windowDiv.className="gallerywindow";
        Gallery.windowDiv.style.position = "absolute";
        var closingLink=document.createElement("a");
        closingLink.setAttribute('href', '#');
        var closeWindowButton = document.createElement("img");
        closeWindowButton.setAttribute("src", "js/jsgallery/img/close.png");
        closeWindowButton.setAttribute("alt", "a small cross");
        closeWindowButton.className="closeWindowIcon";
        closingLink.onclick=Gallery.closeGallery;
        closingLink.appendChild(closeWindowButton);
        Gallery.windowDiv.appendChild(closingLink);
        Gallery.desktop.appendChild( Gallery.windowDiv);
        return false;

    },

    renderGallery: function(galleryBg){

    },

    closeGallery: function(){
        Gallery.windowDiv.parentNode.removeChild( Gallery.windowDiv);

}
};
