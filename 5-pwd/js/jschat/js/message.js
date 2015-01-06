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
  return returnText + currentDate.toLocaleTimeString() + " " + currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear();
 }
 else {
  return currentDate.toLocaleTimeString();
 }
};

