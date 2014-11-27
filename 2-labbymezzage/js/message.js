"use strict";
function Message(message, date) {  //Constructor function from where the objects will be instantiated.

 this.getText = function(){
  return message;
 };

this.setText = function(_text){
 message = _text;
};

 this.getDate = function(){
 return date;
 };

  this.setDate = function(_date){
 date = _date;
  }
}

Message.prototype.toString = function(){
 return this.getText()+"("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
 return this.getText().replace(/[\n\r]/g, "<br/>");
};

Message.prototype.getDateText = function(dateAlert){
 var currentDate = this.getDate();
 if(dateAlert === true){
  var returnText = "This message was created: ";
  return returnText + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + " " + currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear();
 }
 else {
  return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
 }
};


// Display time in 00 format.
//if (hour < 10) {
//hour = "0" + hour;
//}

//jag kör med getDate().toLocaleTimeString();
// doxbox: då blir det samma som inställningarna på datorn