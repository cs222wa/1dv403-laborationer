"use strict";
var PWD = PWD||{};  //Namespace


PWD.AjaxReq = function(url, posttype){
    this.url = url;
    this.posttype = posttype;
    this.loadingImg = undefined;
    this.getAjaxReq();
};


PWD.getAjaxReq = function(){
    var base = this;
    var  request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        var loadingImg = document.createElement("img");
        loadingImg.setAttribute("src", "img/loading.gif");
        loadingImg.setAttribute("alt", "Loading bar");
        loadingImg.className="loadingBar";
        loadingImg.id="load";
        base.setLoadStatus(loadingImg);
        if(request.readyState === 4){
            if(request.status == 200){
                console.log(request.responseText);
            }
            else{
                console.log("Läsfel, status: " + request.status);
            }
            base.removeLoadstatus();
        }
    };

    if(base.posttype === "GET"){
        request.open("get", base.url, true);
        request.send(null)

    }else{
        console.log("Request not sent. Incorrect Post-type and/or boolean value.")
    }
};
