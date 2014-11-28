"use strict";
var MessageBoard  = {

    messages: [],

    init: function() {

        var sent = document.getElementById("button");   //when user presses "send" button
        sent.onclick = MessageBoard.newMsg;            //the function sentMsg is called.
        var listenArea = document.getElementById("textarea");
        listenArea.onkeydown = function(e) {
            if (!e) {
                e = window.event;
            }
            if(e.keyCode === 13 && !e.shiftKey){     //if enter is pressed without shift key
                MessageBoard.newMsg();              //create new message
                listenArea.value = "";              //clear textarea.
            }
        };
    },
    newMsg: function() {
        var msgArea = document.getElementById("textarea"); //tells object where to collect the message text.
        MessageBoard.messages.push(new Message(msgArea.value, new Date())); //adds new object to array
        var lastMsg = MessageBoard.messages.length -1; //select last message in the array,
        MessageBoard.renderMessage(lastMsg); //sends selected message to be created on site
        var displayScroll = document.getElementById("display");
        displayScroll.scrollTop = displayScroll.scrollHeight;
    },
    renderMessage: function(messageID) {
        var displayDiv = document.getElementById("display"); //select the div with id "display"
        var msgDiv = document.createElement("div");  //create a new div to display messages.
        msgDiv.className = "messagediv";
        displayDiv.appendChild(msgDiv);                    //add new div to page.

        var msgText = document.createElement("p"); //create a p-tag to write out message
        msgText.innerHTML = MessageBoard.messages[messageID].getHTMLText();   // get text from message

        var msgDate = document.createElement("p"); //create a p-tag to write out date
        msgDate.innerHTML = MessageBoard.messages[messageID].getDateText();  // get date for message
        msgDate.className = "smallright";

        var sentdiv = document.getElementById("sentmessages"); //select the div where you want the number displayed
        sentdiv.innerHTML  = "";                                //clear the div
        var sentMsg = document.createElement("p"); //create new text element
        sentMsg.innerHTML = "Messages sent " + MessageBoard.messages.length; //add text to element
        sentMsg.className = 'small';

        var deleteMsg = document.createElement("img");  //create img-object
        deleteMsg.setAttribute('src', 'css/pics/delete.png');
        deleteMsg.setAttribute('alt', 'Delete message icon shaped like a red X.');
        deleteMsg.className = 'deleteicon';

        var timeStamp = document.createElement("img"); //create img-object
        timeStamp.setAttribute('src', 'css/pics/clock.png');
        timeStamp.setAttribute('alt', 'Time stamp icon shaped like a small clock.');
        timeStamp.className = 'timeicon';

        var deleteLink = document.createElement("a");
        deleteLink.setAttribute('href', 'javascript:deleteLink.onclick()'); //set onclick event to link
        var timeLink = document.createElement("a");
        timeLink.setAttribute('href', 'javascript:timeLink.onclick()');  //set onclick event to link

        deleteLink.appendChild(deleteMsg); //append img objects to link objects
        timeLink.appendChild(timeStamp);

        msgDiv.appendChild(deleteLink);     //add links to page.
        msgDiv.appendChild(timeLink);
        msgDiv.appendChild(msgText);     //add the text at the bottom of the selected div.
        msgDiv.appendChild(msgDate);       //add the date after the message
        sentdiv.appendChild(sentMsg); // add number of sent messages to page.

        deleteLink.onclick = function(){
            MessageBoard.removeMessage(messageID);     //display a choice for deleting of message
            var warningMsg;
            var r = confirm("Do you really wish to remove selected message?");
            if (r == true) {
                warningMsg = "Message has been removed.";
                var clearDisplay = document.getElementById("display");
                clearDisplay.innerHTML = "";
                MessageBoard.renderMessages();
                alert(warningMsg);
            } else {
                warningMsg = "You pressed cancel. Your message has not been removed.";
                alert(warningMsg);
            }
        };
        timeLink.onclick = function(){      //function to display message info.
           MessageBoard.dateAlert(messageID);
            return false;
        };
    },
    dateAlert: function(messageID) {    //display time and date message was created
        alert(MessageBoard.messages[messageID].getDateText(true));
    },
    renderMessages: function() { //prints all messages in array
        for (var i=0; i< MessageBoard.messages.length; ++i){
            MessageBoard.renderMessage(i);
        }
    },
    removeMessage: function(messageID) {    //removes selected message from array
        MessageBoard.messages.splice(messageID, 1);
    }
};
window.onload = MessageBoard.init; //Placed last in script, otherwise it will become undefined.



