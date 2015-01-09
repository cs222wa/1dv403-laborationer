"use strict";


function Gallery(){
    this.desktop = document.getElementById("desktop");
    this.windowDiv = document.createElement("div");
    this.galleryDiv=document.createElement("div");
    this.galleryLoading = document.createElement("img");
    this.renderGalleryWindow();
    this.closeGallery();
    return false;
}

Gallery.prototype.renderGalleryWindow=function(){
    var base = this;
//Skapa main div
    base.windowDiv.className="gallerywindow";
//Skapa div för gallery div
    base.galleryDiv.className="gallerydiv";
//Skapa div för bottom-bar
    var bottomBar = document.createElement("div");
    bottomBar.className="bottombar";

//skapa loading-gif
    base.galleryLoading = document.createElement("img");
    base.galleryLoading.setAttribute("src", "js/jsgallery/img/loading.gif");
    base.galleryLoading.setAttribute("alt", "Loading bar");
    base.galleryLoading.className="loadingbar";

//Skapa div för top-bar
    var topBar = document.createElement("div");
    topBar.className="topbar";
//Skapa element att lägga i top-bar
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
    closingLink.onclick=this.closeGallery;
//append close-img to a href
    closingLink.appendChild(closeWindowButton);
//append icon to top-bar
    topBar.appendChild(galleryIcon);
//append text to top-bar
    topBar.appendChild(galleryText);
//append ahref to top-bar
    topBar.appendChild(closingLink);
//append top-bar to main div
    base.windowDiv.appendChild(topBar);
//append galleryDiv to main div
    base.windowDiv.appendChild(base.galleryDiv);

//append loading-gif to bottom-bar
    bottomBar.appendChild(base.galleryLoading);

//append bottom-bar to main div
    base.windowDiv.appendChild(bottomBar);
//append main div to desktop

    //Gallery.windowDiv.appendChild(closingLink);
    //Gallery.windowDiv.appendChild(galleryIcon);
    this.desktop.appendChild( base.windowDiv);
    return false;
};

Gallery.prototype.renderGallery=function(){
    var base = this;
    var requestGallery = new XMLHttpRequest();
    requestGallery.onreadystatechange = function(){
        if(requestGallery.readyState==4){
            if (requestGallery.status==200){
                console.log(requestGallery.responseText);
                var data = JSON.parse(requestGallery.responseText);
                for (var i=0; i<data.length; i++) {

                    //create thumbBox
                    var thumbBox = document.createElement("div");
                    thumbBox.className="thumbcontainer";

                    //create thumbnail
                    var thumb = document.createElement("img");
                    thumb.setAttribute("src", data[i].thumbURL);
                    thumb.setAttribute("alt", "thumbnail");
                    thumb.className="thumbnail";
                    thumb.style.maxWidth=data[i].thumbWidth;
                    thumb.style.maxHeight= data[i].thumbHeight;

                    //create link for gallery images
                    var bgLink = document.createElement("a");
                    bgLink.setAttribute("href", "");

                    //append thumb to bgLink
                    bgLink.appendChild(thumb);

                    //append bgLink to thumbBox
                    thumbBox.appendChild(bgLink);
                    //append thumbBox to Gallery.galleryDiv
                    base.galleryDiv.appendChild(thumbBox);
 }
 }
 else{
 alert("Läsfel status: " + requestGallery.status);
 }
 //remove Gallery.galleryLoading from bottom-div.
 base.galleryLoading.parentNode.removeChild( base.galleryLoading);
 }
 };
 requestGallery.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
 requestGallery.send(null);

};


Gallery.prototype.closeGallery = function(){
    var base = this;
    base.windowDiv.parentNode.removeChild( base.windowDiv);
};

/*
var Gallery = {

    desktop : undefined ,
    windowDiv : undefined,
    galleryDiv: undefined,
    galleryLoading: undefined,

    init: function(){

//Skapa main div
        Gallery.desktop = document.getElementById("desktop");
        Gallery.windowDiv = document.createElement("div");
        Gallery.windowDiv.className="gallerywindow";
//Skapa div för gallery div
        Gallery.galleryDiv=document.createElement("div");
        Gallery.galleryDiv.className="gallerydiv";
//Skapa div för bottom-bar
        var bottomBar = document.createElement("div");
        bottomBar.className="bottombar";

//skapa loading-gif
        Gallery.galleryLoading = document.createElement("img");
        Gallery.galleryLoading.setAttribute("src", "js/jsgallery/img/loading.gif");
        Gallery.galleryLoading.setAttribute("alt", "Loading bar");
        Gallery.galleryLoading.className="loadingbar";

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
//append galleryDiv to main div
        Gallery.windowDiv.appendChild(Gallery.galleryDiv);

//append loading-gif to bottom-bar
        bottomBar.appendChild(Gallery.galleryLoading);

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

                        //create thumbBox
                        var thumbBox = document.createElement("div");
                        thumbBox.className="thumbcontainer";

                        //create thumbnail
                        var thumb = document.createElement("img");
                        thumb.setAttribute("src", data[i].thumbURL);
                        thumb.setAttribute("alt", "thumbnail");
                        thumb.className="thumbnail";
                        thumb.style.maxWidth=data[i].thumbWidth;
                        thumb.style.maxHeight= data[i].thumbHeight;

                        //create link for gallery images
                        var bgLink = document.createElement("a");
                        bgLink.setAttribute("href", "");

                        //append thumb to bgLink
                        bgLink.appendChild(thumb);

                        //append bgLink to thumbBox
                        thumbBox.appendChild(bgLink);
                        //append thumbBox to Gallery.galleryDiv
                        Gallery.galleryDiv.appendChild(thumbBox);

                        /*
                        console.log("Image url = " + data[i].URL);
                        console.log("Image width = " + data[i].width);
                        console.log("Image height = " + data[i].height);
                        console.log("Image thumbURL = " + data[i].thumbURL);
                        console.log("Image thumbWidth = " + data[i].thumbWidth);
                        console.log("Image thumbHeight = " + data[i].thumbHeight);
                        */
/*
                    }
                }
                else{
                    alert("Läsfel status: " + requestGallery.status);
                }
                //remove Gallery.galleryLoading from bottom-div.
                Gallery.galleryLoading.parentNode.removeChild( Gallery.galleryLoading);
            }
        };
        requestGallery.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
        requestGallery.send(null);
    },

    closeGallery: function(){
        Gallery.windowDiv.parentNode.removeChild( Gallery.windowDiv);
    }
};

*/