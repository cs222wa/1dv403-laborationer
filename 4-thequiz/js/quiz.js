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

    init: function(){

        var url = "http://vhost3.lnu.se:20080/question/1";
        var click;

        //start new game
        document.getElementById("startbutton").addEventListener("click", function() {

            var xhr = new XMLHttpRequest();
             xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status === 200) {
                    var question = JSON.parse(xhr.responseText);
                    console.log(question);

                    var card = document.getElementById("questionarea");
                    var quiz = document.createElement("p");
                    quiz.innerHTML = question.question;
                    url = question.nextURL;
                    card.appendChild(quiz);
                } //if ends
            }; //onreadystatechange ends


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
                    if(xhr.readyState == 4 && xhr.status != 200){
                        var question = JSON.parse(xhr.responseText);
                        console.log(question);
                        var card = document.getElementById("questionarea");
                        var quiz = document.createElement("p");
                        quiz.innerHTML=question.message;
                        card.appendChild(quiz);
                    }

                };

                xhr.send(JSON.stringify(jsonMessage));

            });
        });
    }
}; //object Quiz ends

window.onload = Quiz.init;


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