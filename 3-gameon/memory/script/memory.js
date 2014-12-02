"use strict";
var Memory = {
    init: function() {
        //Inital function receives information on number of rows and columns
        //Then sends this information to a new function, which creates the array.
        this.memory_values = [];
        this.memory_tile_ids = [];
        this.tiles_flipped = 0;

        this.rows = 4;
        this.columns = 4;
        Memory.gameArray(this.rows, this.columns);
    },

    gameArray: function(rows, columns){
        //retrieve a new array based on the amount of rows and columns given.
        var gameArr = RandomGenerator.getPictureArray(rows, columns);

        Memory.gameBoard(gameArr);
    },

   gameBoard: function(tilesArray){
       console.log(tilesArray);
       var board = document.getElementById("gameboard");
       this.tiles_flipped = 0;
       var output = "";
       for (var i =0; i < tilesArray.length; i++) {

           var tile = document.createElement("div");
           tile.setAttribute('id', 'tile'+i);
           tile.className= "tile";

           var bg = document.createElement("img");
           bg.setAttribute('src', 'pics/0.jpg');
           bg.className= "bgimg";
           tile.appendChild(bg);


           var clickable = document.createElement("a");
           clickable.setAttribute('href', 'javascript:gameBoard.onclick()');

           clickable.appendChild(tile);
           board.appendChild(clickable);


           //output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+tilesArray[i]+'\')"></div>';

          /* var tile = document.createElement("img");
           tile.setAttribute('src', 'pics/0.jpg');
           tile.setAttribute('alt', 'Image of a random Transformer.');
           tile.className = 'tiles';
           board.appendChild(tile);*/
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
        tile.setAttribute('src', 'pics/0.jpg');
        tile.setAttribute('alt', 'Image of a random Transformer.');
        tile.className = 'tiles';*/
   // }






 /*   gameBoard: function(randomBoard){
        //Prints the array onto the webpage, creating the gameboard.
        var board = document.getElementById("gameboard");


        for (var i = 0; i < randomBoard.length; i++){

            var tile = document.createElement("img");
            tile.setAttribute('src', 'pics/0.jpg');
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


//board.appendChild(randomBoard);
//loop through the array?
//for every array create img element
//refer the numbers in array to name of img?
//
//replace title with  arr[] ??

//for each img element create a element
//place img inside a
//append each a to page through "board".
