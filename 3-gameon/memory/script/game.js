"use strict";
var Memory = {
    init: function() {
        this.rows = 4;
        this.columns = 4;
        var randomArr = RandomGenerator.getPictureArray(this.rows, this.columns);
        Memory.renderBoard(randomArr);
    },

    renderBoard: function(gameArr){

    var board = document.getElementById("gameboard");
        var guess1 ="";
        var guess2 ="";
        var totalTries = 0;
        var tries = 0; //variable for number of attempts made
        var finds = 0; //variable for amount of correct answers


        gameArr.forEach(function(tile, index){

            var container = document.createElement("div");
            container.setAttribute('id', 'tile'+index);
            container.className= "tile";

            var picture = document.createElement("img");
            picture.setAttribute('src', 'pics/img0.jpg');
            picture.setAttribute('alt', 'Image of the Transformers logo.');
            picture.className= "bgimg";
            container.appendChild(picture);

            var link = document.createElement("a");
            link.setAttribute('href', '#');

            link.onclick = function(e){

                if (tries < 2){
                    tries++;
                    e.target.src ="pics/img" + tile + ".jpg";
                    e.target.alt = "Picture of random Transformer.";

                    if(tries == 1){
                        guess1 = e.target;
                        console.log("first try");
                    }
                    else {
                        guess2 = e.target;
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
                                console.log(guess1);
                                console.log(guess2);

                                guess2.src ="pics/img0.jpg";
                                guess1.src ="pics/img0.jpg";
                               // e.target.alt = "Image of the Transformers logo.";
                                tries = 0; //resets number of tries.
                                  //flips tiles after 1 second.

                                console.log("flipping tiles");

                            }, 1000);

                        }
                    }
                    if(finds == 8){
                        alert("Congratulations, you solved the game in " + totalTries + " tries!");
                        setTimeout(function(){      //clears console log after 1 seconds.
                            console.clear();
                        }, 10000);
                    }

                    }
            };

            link.appendChild(container);
            board.appendChild(link);

        });

    }
};
window.onload = Memory.init;





/*
Things to fix
An already upturned tile should not be clickable, same if a match has been made.

 */
