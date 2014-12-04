"use strict";

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

function MemoryGame(id, rows, columns){      //constructor
    this.root = document.getElementById(id);
    this.root.classList.add("MemoryGameBoard");
    this.rows = rows;
    this.columns = columns;
    this.randomArr = RandomGenerator.getPictureArray(this.rows, this.columns);
    this.renderBoard();
}
MemoryGame.prototype.renderBoard=function(){
    var base = this;
    var guess1 ="";
    var guess2 ="";
    var totalTries = 0;
    var tries = 0; //variable for number of attempts made
    var finds = 0; //variable for amount of correct answers
    base.randomArr.forEach(function(tile, index){
        var picture = document.createElement("img");
        picture.setAttribute('src', 'pics/img0.jpg');
        picture.setAttribute('alt', 'Image of the Transformers logo.');
        picture.classList.add("bgimg");
        var link = document.createElement("a");
        link.className= "tile";
        link.setAttribute('href', '#');
        if(index % 4 == 0){
            link.classList.add("clear");
        }
        link.onclick = function(e){
            e.preventDefault();
            var selectedImg = this.childNodes[0];
            console.log(selectedImg);
            if (tries < 2 && !selectedImg.classList.contains("faceUp")){
                tries++;
                selectedImg.src ="pics/img" + tile + ".jpg";
                selectedImg.alt = "Picture of random Transformer.";
                if(tries == 1){
                    guess1 = selectedImg;
                    guess1.classList.add("faceUp");
                    console.log("first try");
                }
                else {
                    guess2 = selectedImg;
                    guess2.classList.add("faceUp");
                    console.log("second try");
                    if(guess1.src == guess2.src){  //if the source image for both guesses are the same it logs as a match.
                        finds++;
                        totalTries++;
                        console.log(finds);
                        tries = 0; //resets number of tries.
                    }
                    else{
                        totalTries++;
                        setTimeout(function(){
                            guess1.classList.remove("faceUp");
                            guess2.classList.remove("faceUp");
                            guess2.src ="pics/img0.jpg";
                            guess1.src ="pics/img0.jpg";
                            // e.target.alt = "Image of the Transformers logo.";
                            tries = 0; //resets number of tries.
                            //flips tiles after 1 second.
                            console.log("flipping tiles");
                        }, 1000);
                    }
                }
                if(finds >= base.randomArr.length/2){
                    alert("Congratulations, you solved the game in " + totalTries + " tries!");
                    setTimeout(function(){      //clears console log after 1 seconds.
                        console.clear();
                    }, 10000);
                }
            }
        };
        link.appendChild(picture);
        base.root.appendChild(link);
    });
};
window.onload = function(){
  //  Memory.init();
    new MemoryGame("gameboard", 4 , 4);
 //   new MemoryGame("gameboard2", 1 , 4);        //parameters for constructor
};