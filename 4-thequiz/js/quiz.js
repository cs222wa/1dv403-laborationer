"use strict";
window.onload = function(){



//start game
document.getElementById("startbutton").addEventListener("click", function(){

var xhr = new XMLHttpRequest();


   xhr.onreadystatechange = function(){
       console.log("svar");
   };

    xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
    xhr.send(null);
});





//insert answer and send
    document.getElementById("startbutton").addEventListener("click", function() {

    });


};


//Retrieve the question
//turn it into usable code
//present question on page
//send answer

//You got your question! Now send me the answer via HTTP POST to the nextURL in JSON-format