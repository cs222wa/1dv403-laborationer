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
                e.target.src ="pics/img" + tile + ".jpg";

            }

            link.appendChild(container);
            board.appendChild(link);


           // console.log(tile);  //bild som ska visas
           // console.log(index); //ordningen i arrayen
        });


/*
    for (var i =0; i < gameArr.length; i++) {


        var tile = document.createElement("div");
        tile.setAttribute('id', 'tile'+i);
        tile.className= "tile";

        var picture = document.createElement("img");
        picture.setAttribute('src', 'pics/img0.jpg');
        picture.setAttribute('alt', 'Image of the Transformers logo.');
        picture.className= "bgimg";
        tile.appendChild(picture);

        var flipTile = function(self,index){
            self.querySelector("img").src = "pics/" + gameArr[index]+".jpg";
            console.log(this.querySelector("img"));
            console.log(gameArr);
            console.log(gameArr[index]);
            console.log(index);
        };

        var link = document.createElement("a");
        link.setAttribute('href', '#');
        link.onclick = function(){
            flipTile(this,i);
        }
        link.appendChild(tile);
        board.appendChild(link);
    }*/
}
};
window.onload = Memory.init;
