"use strict";
var Memory = {
    init: function() {

        var rows = 4;
        var columns = 4;
        var gameArr = RandomGenerator.getPictureArray(rows, columns);
        console.log(gameArr);
    }
}
window.onload = Memory.init;



