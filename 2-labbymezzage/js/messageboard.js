"use strict";



var MessageBoard  = {

    messages: [],

    init: function() {
        var sent = document.getElementById("button");   //when user presses "send" button
        sent.onclick = MessageBoard.sentMsg;            //the function sentMsg is called.
    },

    sentMsg: function() {

        var msgArea = document.getElementById("textarea"); //tells object where to collect the message text.
       // console.log(msgArea.value);
        MessageBoard.messages.push(new Message(msgArea.value, new Date())); //adds new object to array
        var lastMsg = MessageBoard.messages.length -1; //select last message in the array,
        MessageBoard.renderMessage(lastMsg); //sends selected message to be created on site
    },

    renderMessage: function(messageID) {
        var div = document.getElementById("display"); //select the div where you want your message displayed.
        var msgText = document.createElement("p"); //create a p-tag to write out message
        msgText.innerHTML = MessageBoard.messages[messageID].getHTMLText();   // get text from message

        var msgDate = document.createElement("p"); //create a p-tag to write out date
        msgDate.innerHTML = MessageBoard.messages[messageID].getDateText();  // get date for message
        msgDate.className = "small";

        div.appendChild(msgText);     //add the text at the bottom of the selected div.
        div.appendChild(msgDate);
        console.log(msgText, msgDate);
    }
};
window.onload = MessageBoard.init; //Placed last in script, otherwise it will become undefined.


/*
To Do
- Create counter to display on the page.
        Append/replace to div "sentmessages".
*/