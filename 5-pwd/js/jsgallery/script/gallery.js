"use strict";
var pwd = pwd||{};  //Namespace


pwd.Gallery = function(x, y){
    this.WindowConstructor("img/desktop/bsgalleryicon.png", "Bildgalleri", x, y);
    this.desktop = document.getElementById("desktop");
    this.renderGallery();
};


pwd.GalleryImage = function(x, y){
    this.WindowConstructor("img/desktop/bsgalleryicon.png", "", x, y);
    this.desktop = document.getElementById("desktop");
    this.renderImage();
};

pwd.GalleryImage.prototype = new pwd.AppWindow();
pwd.GalleryImage.constructor = pwd.GalleryImage;
pwd.GalleryImage.prototype.renderImage = function(){

};


pwd.Gallery.prototype = new pwd.AppWindow();
pwd.Gallery.constructor = pwd.Gallery;
pwd.Gallery.prototype.renderGallery=function(){
    var base = this;
    var loadingImg = document.createElement("img");
    loadingImg.setAttribute("src", "img/loading.gif");
    loadingImg.setAttribute("alt", "Loading bar");
    loadingImg.className="loadingBar";
    loadingImg.id="load";
    var requestGallery = new XMLHttpRequest();
    requestGallery.onreadystatechange = function(){
        pwd.AppWindow.prototype.setLoadStatus(loadingImg);
        if(requestGallery.readyState==4){
            if (requestGallery.status==200){
                //console.log(requestGallery.responseText);
                var data = JSON.parse(requestGallery.responseText);
                for (var i=0; i<data.length; i++) {
                    //create thumbBox
                    var thumbBox = document.createElement("div");
                    thumbBox.className="thumbContainer";
                    //create thumbnail
                    var thumb = document.createElement("img");
                    thumb.setAttribute("src", data[i].thumbURL);
                    thumb.setAttribute("alt", "thumbnail");
                    thumb.style.maxWidth=data[i].thumbWidth;
                    thumb.style.maxHeight= data[i].thumbHeight;
                    //create link for gallery images
                    var bgLink = document.createElement("a");
                    bgLink.setAttribute("href", "#");
                    bgLink.id="imageLink";
                    bgLink.onclick = function(){
                        console.log("click");
                        new pwd.GalleryImage(pwd.Main.calcX(pwd.Main.appCounterX), pwd.Main.calcY(pwd.Main.appCounterY));
                        pwd.Main.appCounterY++;
                        pwd.Main.appCounterX++;
                        if(pwd.Main.appCounterY >= 15){
                            pwd.Main.appCounterY = 0;
                            pwd.Main.calcY(pwd.Main.appCounterY);
                        }
                        if(pwd.Main.appCounterX >= 45){
                            pwd.Main.appCounterX = 0;
                            pwd.Main.calcX(pwd.Main.appCounterX);
                        }
                        return false
                    };

                    //append thumb to bgLink
                    bgLink.appendChild(thumb);
                    //append bgLink to thumbBox
                    thumbBox.appendChild(bgLink);
                    //append thumbBox to Gallery.contentDiv
                    base.contentDiv.appendChild(thumbBox);
 }
 }
 else{
 alert("Läsfel status: " + requestGallery.status);
 }
            pwd.AppWindow.prototype.removeLoadstatus();
 }
 };
 requestGallery.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
 requestGallery.send(null);
};

