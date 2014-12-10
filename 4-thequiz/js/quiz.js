"use strict";
window.onload = function(){


//start game
document.getElementById("startbutton").addEventListener("click", function(){

    var xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status === 200){
            var question = JSON.parse(xhr.responseText);
            console.log(question);
            console.log(question.question);

            var card = document.getElementById("questionarea");
            var quiz = document.createElement("p");
            quiz.innerHTML=question.question;
            card.appendChild(quiz);
        }
   };

    xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);
    xhr.send(null);
});



/*

//insert answer and send
    document.getElementById("startbutton").addEventListener("click", function() {

        xhr.open()
    });
*/

};


//Retrieve the question         check
//turn it into usable code      check
//present question on page      check

//send answer

//You got your question! Now send me the answer via HTTP POST to the nextURL in JSON-format