"use strict";
var PWD = PWD||{};  //Namespace

PWD.Coloring = function(x, y){
    this.WindowConstructor("img/desktop/bscoloringicon.png", "Målarbok", x, y, 780+"px", 700+"px");
    this.desktop = document.getElementById("desktop");
    this.canvas = undefined;



    //insert this.accessable variables here
    this.renderCanvas();
    };

PWD.Coloring.prototype = new PWD.AppWindow();
PWD.Coloring.constructor = PWD.Coloring;
PWD.Coloring.prototype.renderCanvas=function(){
    var base = this;
    base.canvas = document.createElement("canvas");
    base.canvas.className="canvas";
    base.contentDiv.appendChild(base.canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
        base.canvas = G_vmlCanvasManager.initElement(base.canvas);
    }
     var context = base.canvas.getContext("2d");


    var clickX = new Array();
    var clickY = new Array();
    var clickDrag = new Array();
    var paint = false;

    //When mousebutton is pressed down - the function finds the mouse's coordinates and calls the appropriate functions.
    base.canvas.onmousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;

        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    });

    //When mousebutton is moved the function traces the mouse's coordinates and calls the appropriate functions..
    base.canvas.onmousemove(function(e){
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    });

    //When the mousebutton is released OR mouse moves off the canvas area the function stops drawing.
    base.canvas.onmouseup(function(e){
        paint = false;
    });
    base.canvas.onmouseout(function(e){
        paint = false;
    });

    //this function saves the position of the mouse
    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
    }

    //this function saves and redraws all the information that has been "drawn" on the canvas
    //each time the function is called.
    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

        context.strokeStyle = "#df4b26";
        context.lineJoin = "round";
        context.lineWidth = 5;

        for(var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.stroke();
        }
    }
};


