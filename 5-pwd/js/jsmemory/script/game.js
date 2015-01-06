"use strict";

//Original code for one game.

//var Memory = {
//    init: function() {
//        this.rows = 4;
//        this.columns = 4;
//        var randomArr = RandomGenerator.getPictureArray(this.rows, this.columns);
//        Memory.renderBoard(randomArr);
//    },
//    renderBoard: function(gameArr){
//    var board = document.getElementById("gameboard");
//        var guess1 ="";
//        var guess2 ="";
//        var totalTries = 0;
//        var tries = 0; //variable for number of attempts made
//        var finds = 0; //variable for amount of correct answers
//        gameArr.forEach(function(tile, index){
//         /*   var container = document.createElement("div");
//            container.setAttribute('id', 'tile'+index);
//            container.className= "tile";
//           */
//            var picture = document.createElement("img");
//            picture.setAttribute('src', 'pics/img0.jpg');
//            picture.setAttribute('alt', 'Image of the Transformers logo.');
//            picture.classList.add("bgimg");
//            var link = document.createElement("a");
//            link.className= "tile";
//            link.setAttribute('href', '#');
//            if(index % 4 == 0){
//                link.classList.add("clear");
//            }
//            link.onclick = function(e){
//                e.preventDefault();
//                var selectedImg = this.childNodes[0];
//                console.log(selectedImg);
//                if (tries < 2 && !selectedImg.classList.contains("faceUp")){
//                    tries++;
//                    selectedImg.src ="pics/img" + tile + ".jpg";
//                    selectedImg.alt = "Picture of random Transformer.";
//
//                    if(tries == 1){
//                        guess1 = selectedImg;
//                        guess1.classList.add("faceUp");
//                        console.log("first try");
//                    }
//                    else {
//                        guess2 = selectedImg;
//                        guess2.classList.add("faceUp");
//                        console.log("second try");
//
//                        if(guess1.src == guess2.src){  //if the source image for both guesses are the same it logs as a match.
//                            finds++;
//                            totalTries++;
//                            console.log(finds);
//                            tries = 0; //resets number of tries.
//                        }
//                        else{
//                            totalTries++;
//                            setTimeout(function(){
//                                guess1.classList.remove("faceUp");
//                                guess2.classList.remove("faceUp");
//                                guess2.src ="pics/img0.jpg";
//                                guess1.src ="pics/img0.jpg";
//                               // e.target.alt = "Image of the Transformers logo.";
//                                tries = 0; //resets number of tries.
//                                  //flips tiles after 1 second.
//
//                                console.log("flipping tiles");
//
//                            }, 1000);
//                        }
//                    }
//                    if(finds >= gameArr.length/2){
//                        alert("Congratulations, you solved the game in " + totalTries + " tries!");
//                        setTimeout(function(){      //clears console log after 1 seconds.
//                            console.clear();
//                        }, 10000);
//                    }
//                    }
//            };
//            //link.appendChild(container);
//            link.appendChild(picture);
//            board.appendChild(link);
//        });
//    }
//};

function MemoryGame(id, rows, columns){         //constructor
    this.root = document.getElementById(id);    //Which div the game will be referred to.
    this.root.classList.add("MemoryGameBoard");
    this.rows = rows;
    this.columns = columns;
    this.randomArr = RandomGenerator.getPictureArray(this.rows, this.columns);   //get random array
    this.renderBoard();
}
MemoryGame.prototype.renderBoard=function(){
    var base = this;        //renamed this to base to make the same variable names work in new method.
    var guess1 ="";
    var guess2 ="";
    var totalTries = 0;     //variables for total number of attempts made
    var tries = 0;          //variable for number of attempts made
    var finds = 0;          //variable for amount of correct answers
    base.randomArr.forEach(function(tile, index){               //for each element in teh array
        var picture = document.createElement("img");            //create img, set source, alt, and class "bgimg".
        picture.setAttribute('src', 'pics/img0.jpg');
        picture.setAttribute('alt', 'Image of the Transformers logo.');
        picture.classList.add("bgimg");
        var link = document.createElement("a");                 //create link, set every 4th link to class "clear".
        link.className= "tile";
        link.setAttribute('href', '#');
        if(index % 4 == 0){
            link.classList.add("clear");
        }
        link.onclick = function(e){             //when link is clicked, go through multiple if-statements
            e.preventDefault();
            var selectedImg = this.childNodes[0];
            console.log(selectedImg);
            if (tries < 2 && !selectedImg.classList.contains("faceUp")){    //if the tile isn't already clicked
                tries++;                                                    //or it's the first/second attempt.
                selectedImg.src ="pics/img" + tile + ".jpg";
                selectedImg.alt = "Picture of random Transformer.";
                if(tries == 1){
                    guess1 = selectedImg;                        //save first guess as variable.
                    guess1.classList.add("faceUp");              //assigns img to new class.
                    console.log("first try");
                }
                else {
                    guess2 = selectedImg;                       //save second guess as variable.
                    guess2.classList.add("faceUp");             //assigns img to new class.
                    console.log("second try");
                    if(guess1.src == guess2.src){  //if the source image for both guesses are the same it logs as a match.
                        finds++;                   //adds 1 to log match found
                        totalTries++;              //adds 1 to log number of total tries.
                        console.log(finds);
                        tries = 0;          //resets number of tries.
                    }
                    else{
                        totalTries++;   //if no match is made it adds 1 to log number of total tries.
                        setTimeout(function(){
                            guess1.classList.remove("faceUp");  //removes class from guesses
                            guess2.classList.remove("faceUp");
                            guess2.src ="pics/img0.jpg";        //resets images and alt text.
                            guess1.src ="pics/img0.jpg";
                            guess1.alt = "Image of the Transformers logo.";
                            guess2.alt = "Image of the Transformers logo.";
                            tries = 0;                      //resets number of tries.

                            console.log("flipping tiles");//flips tiles after 1 second
                        }, 1300);         //0,3 seconds is added to compensate for time lost during flip-animation.
                    }
                }
                if(finds >= base.randomArr.length/2){   //when max number of finds are made a meesage displays.
                    alert("Congratulations, you solved the game in " + totalTries + " tries!");
                    setTimeout(function(){      //clears console log 1 second after game has ended.
                        console.clear();
                    }, 10000);
                }
            }
        };
        link.appendChild(picture);      //displays links containing pictures on webpage.
        base.root.appendChild(link);    //displays div gameboard containing the links on webpage.
    });
};
window.onload = function(){
  //  Memory.init();                             //Uncomment to run original code at top of document.
    new MemoryGame("gameboard", 4 , 4);          //parameters for constructor
   //new MemoryGame("gameboard2", 1 , 4);       //Uncomment to run 2 sets of games at the same time.
};