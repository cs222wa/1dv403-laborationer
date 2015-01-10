"use strict";
var PWD = PWD||{};  //Namespace


PWD.Gallery = function(x, y){
    this.WindowConstructor("img/desktop/bsgalleryicon.png", "Bildgalleri", x, y);
    this.desktop = document.getElementById("desktop");
    this.renderGallery();
};


PWD.GalleryImage = function(x, y, imgURL){
    this.WindowConstructor("img/desktop/bsgalleryicon.png", "", x, y);
    this.desktop = document.getElementById("desktop");
    this.URL = imgURL;
    console.log(imgURL);
    this.renderImage();
};

PWD.GalleryImage.prototype = new PWD.AppWindow();
PWD.GalleryImage.constructor = PWD.GalleryImage;
PWD.GalleryImage.prototype.renderImage = function(){
    var base = this;
    var bigImage = document.createElement("img");
    bigImage.setAttribute("src", base.URL);
    bigImage.setAttribute("alt","Larger Image");
    bigImage.className="bigImage";
    base.contentDiv.appendChild(bigImage);
    console.log(bigImage);
};


PWD.Gallery.prototype = new PWD.AppWindow();
PWD.Gallery.constructor = PWD.Gallery;
PWD.Gallery.prototype.renderGallery=function(){
    var base = this;
    var loadingImg = document.createElement("img");
    loadingImg.setAttribute("src", "img/loading.gif");
    loadingImg.setAttribute("alt", "Loading bar");
    loadingImg.className="loadingBar";
    loadingImg.id="load";
    var requestGallery = new XMLHttpRequest();
    requestGallery.onreadystatechange = function(){
        base.setLoadStatus(loadingImg);
        if(requestGallery.readyState==4){
            if (requestGallery.status==200){
               // console.log(requestGallery.responseText);
                var data = JSON.parse(requestGallery.responseText);
                data.forEach(function(image){
                    //create thumbBox
                    var thumbBox = document.createElement("div");
                    thumbBox.className="thumbContainer";
                    //create thumbnail
                    var thumb = document.createElement("img");
                    thumb.setAttribute("src", image.thumbURL);
                    thumb.setAttribute("alt", "thumbnail");
                    thumb.style.maxWidth=image.thumbWidth;
                    thumb.style.maxHeight= image.thumbHeight;
                    //create link for gallery images
                    var bgLink = document.createElement("a");
                    bgLink.setAttribute("href", "#");
                    bgLink.id="imageLink";
                    bgLink.onclick = function(){
                        new PWD.GalleryImage(PWD.Main.calcX(PWD.Main.appCounterX), PWD.Main.calcY(PWD.Main.appCounterY),image.URL);
                        console.log(image.URL);
                        PWD.Main.appCounterY++;
                        PWD.Main.appCounterX++;
                        if(PWD.Main.appCounterY >= 15){
                            PWD.Main.appCounterY = 0;
                            PWD.Main.calcY(PWD.Main.appCounterY);
                        }
                        if(PWD.Main.appCounterX >= 45){
                            PWD.Main.appCounterX = 0;
                            PWD.Main.calcX(PWD.Main.appCounterX);
                        }
                        return false
                };


                    //append thumb to bgLink
                    bgLink.appendChild(thumb);
                    //append bgLink to thumbBox
                    thumbBox.appendChild(bgLink);
                    //append thumbBox to Gallery.contentDiv
                    base.contentDiv.appendChild(thumbBox);
                });
 }
 else{
 alert("Läsfel status: " + requestGallery.status);
 }
            base.removeLoadstatus();
 }
 };
 requestGallery.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
 requestGallery.send(null);
};


