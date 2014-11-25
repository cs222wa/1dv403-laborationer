"use strict";



var MessageBoard  = {

    messages: [],

    init: function() {
        var sent = document.getElementById("button");   //when user presses "send" button
        sent.onclick = MessageBoard.sentMsg;            //the function sentMsg is called.
    },

    sentMsg: function() {

        var msg = document.getElementById("textarea"); //collects the message written by user.


        //add user message as an object to messages[] by useing the comman .push

        //  Put anything into an array using Array.push().
//        var a=[], b={};
//          a.push(b);
//          //a[0] === b;






    }

};

window.onload = MessageBoard.init; //Placed last in code, otherwise it will become undefined.


