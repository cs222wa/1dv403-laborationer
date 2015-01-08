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
        Gallery.renderGallery();
        return false;


    },

    renderGallery: function(){

        var requestGallery = new XMLHttpRequest();
        requestGallery.onreadystatechange = function(){
            if(requestGallery.readyState==4){
                if (requestGallery.status==200){
                    console.log(requestGallery.responseText);
                    var data = JSON.parse(requestGallery.responseText);
                    for (var i=0; i<data.length; i++) {
                        console.log("Image url = " + data[i].URL);
                        console.log("Image width = " + data[i].width);
                        console.log("Image height = " + data[i].height);
                        console.log("Image thumbURL = " + data[i].thumbURL);
                        console.log("Image thumbWidth = " + data[i].thumbWidth);
                        console.log("Image thumbHeight = " + data[i].thumbHeight);
                    }
                }
                else{
                    console.log("Läsfel status: " + requestGallery.status);
                }
            }
        };
        requestGallery.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        requestGallery.send(null);

        //json-object
        //var egenskap i objectet = JSON.parse(json-object);
        //alert(egenskap i objectet[0].egenskap);

    },

    closeGallery: function(){
        Gallery.windowDiv.parentNode.removeChild( Gallery.windowDiv);

}
};







