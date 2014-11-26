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

        var div = document.getElementById("display"); //select the div with id "display"
        var msgDiv = document.createElement("div");  //create a new div to display messages.
        div.appendChild(msgDiv);                    //add new div to page.

        var msgText = document.createElement("p"); //create a p-tag to write out message
        msgText.innerHTML = MessageBoard.messages[messageID].getHTMLText();   // get text from message

        var msgDate = document.createElement("p"); //create a p-tag to write out date
        msgDate.innerHTML = MessageBoard.messages[messageID].getDateText();  // get date for message
        msgDate.className = "smallright";

        msgDiv.appendChild(msgText);     //add the text at the bottom of the selected div.
        msgDiv.appendChild(msgDate);       //add the date after the message


        var sentdiv = document.getElementById("sentmessages"); //select the div where you want the number displayed
        sentdiv.innerHTML  = "";                                //clear the div
        var sentMsg = document.createElement("p"); //create new text element
        sentMsg.innerHTML = "Messages sent " + MessageBoard.messages.length; //add text to element
        sentdiv.appendChild(sentMsg); // add text to page.

        console.log(MessageBoard.messages);

        var deleteMsg = document.createElement("img");
        deleteMsg.setAttribute('src', 'css/pics/delete.png');
        deleteMsg.setAttribute('alt', 'Delete message');
        deleteMsg.style.width= '15px';
        deleteMsg.style.height= '15px';
        deleteMsg.style.float= 'right';
        msgDiv.appendChild(deleteMsg);

        deleteMsg.onclick = function(){
            MessageBoard.removeMessage(messageID);
            alert("Removing message from chat.");
        }
    },

        removeMessage: function(messageID) {
            MessageBoard.messages.splice(messageID, 1)
            console.log(MessageBoard.messages);
        }


};
window.onload = MessageBoard.init; //Placed last in script, otherwise it will become undefined.






//.style.fontcolor("#9a1027");  --- red color


/*
div where 1 message is displayed = msgDiv
div where counter is displayed = sentDiv
*/

/*
Questions - image links for delete & timestamp
How does one place a link/image inside a div which hasn't been created yet?
Answer
var delete = document.createElement("img");
var delete = document.createElement("a");
delete.className = "deleteImg";
delete.style.float = "right"; OR deleteImg.style.float = "right";

 */

/*
If there's time
Create overflow scroll effect on the div "display"
Set clear / float settings on elements to keep the time from tabbing to the left with each post.
Create better looking frames for content - one pannel from top to bottom of page.
Make time display in red.
 */