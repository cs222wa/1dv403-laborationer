"use strict";
var Quiz = {
    url: undefined,
    counter: 0,
    tries: [],
    init: function(){              //start new game
        Quiz.url = "http://vhost3.lnu.se:20080/question/1"
        var click;

        var startGame = function(){
            var postQuestion = function(response){
                var card = document.getElementById("questionarea");
                var quiz = document.createElement("p");
                quiz.innerHTML = response.question;
                Quiz.url = response.nextURL;
                card.appendChild(quiz);
                Quiz.tries[0] = 0; //set current number of current tries in array to 0
                console.log("tries" + Quiz.tries);
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
                Quiz.counter++;
                Quiz.tries.push(Quiz.counter);
                console.log(Quiz.counter);
                console.log(Quiz.tries);
                Quiz.counter = 0;
                card.innerHTML="";
                if(response.nextURL != undefined ){
                    Quiz.url=response.nextURL;
                    startGame();
                }
                else{

                    var sum = Quiz.tries.reduce(function(a, b) { return a + b });
                    var gameOver = document.createElement("p");
                    gameOver.innerHTML="Grattis, du besvarade alla frågorna under " + sum + " försök!";
                    card.appendChild(gameOver);

                   for( var i = 1; i < Quiz.tries.length; i++){
                       var attemptedTries = document.createElement("p");
                       attemptedTries.innerHTML="Fråga " + i + " krävde " + Quiz.tries[i] + " försök.";
                       card.appendChild(attemptedTries);
                       //console.log(Quiz.tries[i]);
                   }


                    //TODO Create button for restart game = Empty Question area, call on init.
                }
            };

            var wrong = function(response){
                Quiz.counter++;
                console.log(Quiz.counter);
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
        xhr.onreadystatechange = function(){
            //Quiz.tries.length[Quiz.tries.length-1]++;   //Add 1 to array every time an answer is given.
            if(xhr.readyState == 4 && xhr.status === 200){
                var question = JSON.parse(xhr.responseText);
                Quiz.tries.length[Quiz.tries.length-1]++;
                console.log("tries added" + Quiz.tries);
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


//TODO Create CSS


/*
 -/ Svarar användaren rätt så tas man vidare till nästa fråga.
 -/ Svarar man fel så får man reda på detta och får möjligheten att svara igen.
    Felaktiga svar per fråga  (counter++ push counter into array.
    Antal försök på varje fråga. (array[]-1; (because last count++ is the correct answer.




 Tänk på att skriva din applikation så generell så att den kan hantera förändringar i datan
 som ligger till grund för API:et. T.ex. så är det ju inte säkert att de frågenummer som
 finns idag kommer att gälla även framöver eller att antalet frågor är detsamma framöver som nu.
 Kanske kommer det att tillkomma frågor, eller tas bort frågor.
 Vi får dock utgå ifrån att första frågans nummer alltid är 1.
 (Även om det är bra om det går enkelt att justera i koden)
 */