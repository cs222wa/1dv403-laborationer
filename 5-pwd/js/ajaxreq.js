"use strict";
var PWD = PWD||{};  //Namespace

PWD.AjaxReq = function(url, posttype, handler){
    this.url = url;
    this.posttype = posttype;
    this.handler = handler;
    this.loadingImg = undefined;
    this.request = undefined;
    this.getAjaxReq();
};

PWD.AjaxReq.prototype.getAjaxReq = function(){
    var base = this;
    var loadingImg = document.createElement("img");
    loadingImg.setAttribute("src", "img/loading.gif");
    loadingImg.setAttribute("alt", "Loading bar");
    loadingImg.className="loadingBar";
    loadingImg.id="load";
    base.request = new XMLHttpRequest();
    base.request.onreadystatechange = function(){
        //   base.setLoadStatus(loadingImg);
        if(base.request.readyState === 4){
            if(base.request.status == 200){
               var response = base.request.responseText;//console.log(base.request.responseText);
                base.handler(response);
            }
            else{
                console.log("Läsfel, status: " + base.request.status);
            }
          //  base.removeLoadstatus();
        }
    };
    if(base.posttype === "GET"){
        base.request.open("get", base.url, true);
        base.request.send(null)
    }else{
        console.log("Request not sent. Incorrect Post-type and/or boolean value.")
    }
};
