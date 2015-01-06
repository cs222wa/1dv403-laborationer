"use strict";
var Memory = {
    init: function() {
        //Inital function receives information on number of rows and columns
        //Then sends this information to a new function, which creates the array.
        this.flipped =0;
        this.rows = 4;
        this.columns = 4;
        Memory.gameArray(this.rows, this.columns);
    },

    gameArray: function(rows, columns){
        //retrieve a new array based on the amount of rows and columns given.
        this.gameArr = RandomGenerator.getPictureArray(rows, columns);

        Memory.gameBoard(this.gameArr);
    },

   gameBoard: function(tilesArray){
       console.log(tilesArray);
       var board = document.getElementById("gameboard");
       for (var i =0; i < tilesArray.length; i++) {

           var tile = document.createElement("div");
           tile.setAttribute('id', 'tile'+i);
           tile.className= "tile";

           var bg = document.createElement("img");
           bg.setAttribute('src', 'pics/img0.jpg');
           bg.setAttribute('alt', 'Image of the Transformers logo.');
           bg.className= "bgimg";
           tile.appendChild(bg);

           var divLink = document.createElement("a");
           divLink.setAttribute('href', '#');
           divLink.appendChild(tile);
           board.appendChild(divLink);
       }

   }

};


window.onload = Memory.init;







       /*


    //create div with x images inside.
    var board = document.getElementById("gameboard");

    for(var i = 0; i < this.rows; i++){
        var d = document.createElement("div");
        board.appendChild(d);
    }

    for (var k = 0; k < gameArr.length; k++){

        var tile = document.createElement("img");
        tile.setAttribute('src', 'pics/img0.jpg');
        tile.setAttribute('alt', 'Image of a random Transformer.');
        tile.className = 'tiles';*/
   // }






 /*   gameBoard: function(randomBoard){
        //Prints the array onto the webpage, creating the gameboard.
        var board = document.getElementById("gameboard");


        for (var i = 0; i < randomBoard.length; i++){

            var tile = document.createElement("img");
            tile.setAttribute('src', 'pics/img0.jpg');
            tile.setAttribute('alt', 'Image of a random Transformer.');
            tile.className = 'tiles';
        }
    },*/

  /*  flipTiles: function(){
        for (var i = 0; i < randomBoard.length; i++){

            var tile = document.createElement("img");
            tile.setAttribute('src', 'pics/' + randomBoard[i] + '.jpg');
            tile.setAttribute('alt', 'Image of a random Transformer.');
            tile.className = 'tiles';
            board.appendChild(tile);
        }
    },*/

  /*  createTable: function(){
        //loop through both value for rows and columns to create tr and td elements.
        var table = getElementById("gameboard");

        for(var i = 0; i < Memory.init.rows; i++){
            var tr = document.createElement("tr");

            for(var j = 0; j < Memory.init.columns; j++){
                var td = document.createElement("td");
            }
        }
    }
*/

