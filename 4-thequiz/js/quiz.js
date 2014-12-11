"use strict";
/*
 window.onload = function(){

 //kapsla in i object för att kunna använda this/that


 //Lägg allt nedanför i funktion "behandling av fråga"
 // VId ny fråga - skicka in info som argument till funktionerna för
 //att hämta korrekt fråga/svar.

 //variabel för klick-momentet sparas för varje fråga
 //variabel för klick-momentet (array) som sparar urlen man senast skickade till/fick?


 var url = "http://vhost3.lnu.se:20080/question/1";
 var click;

 //start game
 document.getElementById("startbutton").addEventListener("click", function(){

 var xhr = new XMLHttpRequest();



 xhr.onreadystatechange = function(){
 if(xhr.readyState == 4 && xhr.status === 200){
 var question = JSON.parse(xhr.responseText);
 console.log(question);

 var card = document.getElementById("questionarea");
 var quiz = document.createElement("p");
 quiz.innerHTML=question.question;
 url=question.nextURL;
 card.appendChild(quiz);
 }
 };

 xhr.open("GET", url, true);
 xhr.send(null);

 //insert answer and send
 document.getElementById("answerbutton").addEventListener("click", function() {

 xhr.open("POST", url, true);
 xhr.setRequestHeader("content-type", "application/json");

 var response = document.getElementById("responsearea");
 var jsonMessage = {
 answer: response.value
 };
 console.log(jsonMessage);

 xhr.onreadystatechange = function(){
 if(xhr.readyState == 4 && xhr.status === 200){
 var question = JSON.parse(xhr.responseText);
 console.log(question);

 var card = document.getElementById("questionarea");
 var quiz = document.createElement("p");
 quiz.innerHTML=question.message;
 url=question.nextURL;
 card.appendChild(quiz);
 }
 };

 xhr.send(JSON.stringify(jsonMessage));


 });
 });
 };


 */


var Quiz = {
    url: undefined,

    init: function(){              //start new game
        Quiz.url = "http://vhost3.lnu.se:20080/question/1"
        var click;
        var base = this;
        /*document.getElementById("startbutton").addEventListener("click", function() {
            var postQuestion = function(response){
                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML = response.question;
                Quiz.url = response.nextURL;
                card.appendChild(quiz);
            };
            Quiz.getQuestion(postQuestion);
        });*/

        var startGame = function(){
            var postQuestion = function(response){
                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML = response.question;
                Quiz.url = response.nextURL;
                card.appendChild(quiz);
            };
            Quiz.getQuestion(postQuestion);
        };

        document.getElementById("answerbutton").addEventListener("click", function() {
            var xhr = new XMLHttpRequest();

            var correct = function(response){
                console.log(response);

                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML=response.message;
                card.appendChild(quiz);

                if(response.nextURL != undefined ){
                    Quiz.url=response.nextURL;
                    startGame();
                }
                else{
                    //TODO Response if game over
                    //TODO Create button for restart game = Empty Question area, call on init.
                }
            };

            var wrong = function(response){
                console.log(response);
                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML=response.message;
                card.appendChild(quiz);
            };
        Quiz.sendAnswer(correct, wrong);
        });
        startGame();
    },


    getQuestion: function(renderQuestion){

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                var question = JSON.parse(xhr.responseText);
                renderQuestion(question);
            }
        };
        xhr.open("GET", Quiz.url, true);
        xhr.send(null);
    },

    sendAnswer: function(correct, wrong){

        var xhr = new XMLHttpRequest();
        xhr.open("POST", Quiz.url, true);
        xhr.setRequestHeader("content-type", "application/json");

        var response = document.getElementById("responsearea");
        var jsonMessage = {
            answer: response.value
        };
        console.log(jsonMessage);
        xhr.onreadystatechange = function(){

            if(xhr.readyState == 4 && xhr.status === 200){
                var question = JSON.parse(xhr.responseText);
                correct(question);
            }
            if(xhr.readyState !== 4 && xhr.status != 200){
                var question = JSON.parse(xhr.responseText);
                wrong(question);
            }

        };
        xhr.send(JSON.stringify(jsonMessage));
    }
}; //object Quiz ends

window.onload = Quiz.init;


//TODO Empty question-area with every new question
//TODO Create click-counter for entire session.
//TODO create click-counter for each game
//TODO Create CSS


/*
 -/ Svarar användaren rätt så tas man vidare till nästa fråga.
 -/? Svarar man fel så får man reda på detta och får möjligheten att svara igen.
 I grundutförande ska applikationen hålla reda på hur många felaktiga svar man givit för varje fråga
 och när samtliga frågor har besvarats så ska resultatet presenteras
 där det framgår hur många försök man behövde för att klara varje fråga.


 Tänk på att skriva din applikation så generell så att den kan hantera förändringar i datan
 som ligger till grund för API:et. T.ex. så är det ju inte säkert att de frågenummer som
 finns idag kommer att gälla även framöver eller att antalet frågor är detsamma framöver som nu.
 Kanske kommer det att tillkomma frågor, eller tas bort frågor.
 Vi får dock utgå ifrån att första frågans nummer alltid är 1.
 (Även om det är bra om det går enkelt att justera i koden)
 */