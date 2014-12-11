"use strict";
var Quiz = {
    url: undefined,
    tries: [],
    init: function(){              //start new game
        Quiz.url = "http://vhost3.lnu.se:20080/question/1"
        var click;
        var base = this;
        var startGame = function(){
            var postQuestion = function(response){
                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML = response.question;
                Quiz.url = response.nextURL;
                Quiz.tries.push(0); //set number of tries in array to 0
                card.appendChild(quiz);
            };
            Quiz.getQuestion(postQuestion);
        };

        document.getElementById("answerbutton").addEventListener("click", function() {
            var xhr = new XMLHttpRequest();
            var card = document.getElementById("questionarea");
            var toBeRemoved = document.getElementById("remove");
            if(toBeRemoved != null){
                toBeRemoved.parentNode.removeChild(toBeRemoved);
            }
            var correct = function(response){
                console.log(response);
                card.innerHTML="";
                if(response.nextURL != undefined ){
                    Quiz.url=response.nextURL;
                    startGame();
                }
                else{
                    var gameOver = document.createElement("p");
                    gameOver.innerHTML="Congratulations, you've answered all the questions!";
                    var numberOfTries = document.createElement("p");
                    numberOfTries.innerHTML="Question 1: " + Quiz.tries[0] + " tries.";
                    card.appendChild(gameOver);
                    card.appendChild(numberOfTries);
                    //TODO Create P tag with number of tries per question.
                    Quiz.tries.length = 0;// Empty number of tries
                    //TODO Create button for restart game = Empty Question area, call on init.
                }
            };

            var wrong = function(response){
                console.log(response);
                var wrongAnswer = document.createElement("p");
                wrongAnswer.id="remove";
                wrongAnswer.innerHTML = "Tyvärr, det var fel. Försök igen.";//response.message;
                card.appendChild(wrongAnswer);
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
            Quiz.tries.length[Quiz.tries.length-1]++;   //Add 1 to array every time an answer is given.
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



//TODO create click-counter for each question (array)
//TODO Create CSS


/*
 -/ Svarar användaren rätt så tas man vidare till nästa fråga.
 -/ Svarar man fel så får man reda på detta och får möjligheten att svara igen.
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