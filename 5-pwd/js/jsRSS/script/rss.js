"use strict";
var PWD = PWD||{};  //Namespace

PWD.RSS = function(x, y, topic, icon, feed){
    console.log(topic);
    this.WindowConstructor(icon, topic, x, y);
    this.desktop = document.getElementById("desktop");
    this.feedUrl = feed;
    this.getRSS();
};

PWD.RSS.prototype = new PWD.AppWindow();
PWD.RSS.constructor = PWD.RSS;
PWD.RSS.prototype.getRSS=function(){
    var base = this;
    var handleResponse = function(response){
        var article = document.createElement("article");
        article.innerHTML=response;
        console.log(article);
        base.renderResponse(article);
    };
    var rssUrl = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=";
    console.log(base.feedUrl);
    var request = new PWD.AjaxReq(rssUrl+encodeURI(base.feedUrl), "GET", handleResponse);
};

PWD.RSS.prototype.renderResponse = function(code){
    var base = this;
    base.contentDiv.appendChild(code);
};
