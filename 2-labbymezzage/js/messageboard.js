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
            if(e.keyCode === 13 && !e.shiftKey){
                MessageBoard.newMsg();
            }
        };
    },
    newMsg: function() {
        var msgArea = document.getElementById("textarea"); //tells object where to collect the message text.
        MessageBoard.messages.push(new Message(msgArea.value, new Date())); //adds new object to array
        var lastMsg = MessageBoard.messages.length -1; //select last message in the array,
        MessageBoard.renderMessage(lastMsg); //sends selected message to be created on site
    },

    renderMessage: function(messageID) {
        var div = document.getElementById("display"); //select the div with id "display"
        var msgDiv = document.createElement("div");  //create a new div to display messages.
        div.appendChild(msgDiv);                    //add new div to page.

        var msgText = document.createElement("p"); //create a p-tag to write out message
        msgText.innerHTML = MessageBoard.messages[messageID].getHTMLText();   // get text from message

        var msgDate = document.createElement("p"); //create a p-tag to write out date
        msgDate.innerHTML = MessageBoard.messages[messageID].getDateText();  // get date for message
        msgDate.className = "smallright";
        msgDate.style.clear= 'both';
        msgDate.style.color= '#9a1027';

        var sentdiv = document.getElementById("sentmessages"); //select the div where you want the number displayed
        sentdiv.innerHTML  = "";                                //clear the div
        var sentMsg = document.createElement("p"); //create new text element
        sentMsg.innerHTML = "Messages sent " + MessageBoard.messages.length; //add text to element
        sentMsg.style.clear= 'both';
        sentMsg.className = 'small';

        var deleteMsg = document.createElement("img");
        deleteMsg.setAttribute('src', 'css/pics/delete.png');
        deleteMsg.setAttribute('alt', 'Delete message icon shaped like a red X.');
        deleteMsg.style.width= '15px';
        deleteMsg.style.height= '15px';
        deleteMsg.style.float= 'right';
        deleteMsg.style.clear= 'both';
        deleteMsg.style.margin= '5px';

        var timeStamp = document.createElement("img");
        timeStamp.setAttribute('src', 'css/pics/clock.png');
        timeStamp.setAttribute('alt', 'Time stamp icon shaped like a small clock.');
        timeStamp.style.width= '15px';
        timeStamp.style.height= '15px';
        timeStamp.style.float= 'right';
        timeStamp.style.clear= 'left';
        timeStamp.style.margin= '5px';

        msgDiv.appendChild(deleteMsg);
        msgDiv.appendChild(timeStamp);
        msgDiv.appendChild(msgText);     //add the text at the bottom of the selected div.
        msgDiv.appendChild(msgDate);       //add the date after the message
        sentdiv.appendChild(sentMsg); // add number of sent messages to page.

        deleteMsg.onclick = function(){
            MessageBoard.removeMessage(messageID);


            var warningMsg;
            var r = confirm("Do you really wish to remove selected message?");
            if (r == true) {
                warningMsg = "Message has been removed.";
                alert(warningMsg);
                var clearDisplay = document.getElementById("display");
                clearDisplay.innerHTML = "";
                MessageBoard.renderMessages();
            } else {
                warningMsg = "You pressed cancel. Your message has not been removed.";
                alert(warningMsg);
            }
        },

        timeStamp.onclick = function(){
           MessageBoard.dateAlert(messageID);
            return false;
        };
    },
    dateAlert: function(messageID) {
        alert(MessageBoard.messages[messageID].getDateText(true));
    },
    renderMessages: function() {
        for (var i=0; i< MessageBoard.messages.length; ++i){
            MessageBoard.renderMessage(i);
        }
    },
    removeMessage: function(messageID) {
        MessageBoard.messages.splice(messageID, 1);
    }
};
window.onload = MessageBoard.init; //Placed last in script, otherwise it will become undefined.

/*
div where 1 message is displayed = msgDiv
div where counter is displayed = sentDiv
*/

/*
If there's time
Create overflow scroll effect on the div "display"
Set elements in msgDiv to be horizontally aligned with each other. Margin on text?
Create better looking frames for content - one pannel from top to bottom of page & frame around each message-div.
 */





