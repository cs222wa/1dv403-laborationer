"use strict";
var PWD = PWD||{};  //Namespace

PWD.Coloring = function(x, y){
    this.WindowConstructor("img/desktop/bscoloringicon.png", "Målarbok", x, y, 780+"px", 700+"px");
    this.desktop = document.getElementById("desktop");
    this.canvas = undefined;
    this.smallSize = undefined;
    this.normalSize = undefined;
    this.bigSize = undefined;
    this.pen = undefined;
    this.eraser = undefined;
    this.renderCanvas();
    };

PWD.Coloring.prototype = new PWD.AppWindow();
PWD.Coloring.constructor = PWD.Coloring;
PWD.Coloring.prototype.renderCanvas=function(){
    var base = this;
    base.canvas = document.createElement("canvas");
    base.canvas.className="canvas";
    base.canvas.setAttribute('width', "780px");
    base.canvas.setAttribute('height', "513px");
    base.contentDiv.appendChild(base.canvas);
    if(typeof G_vmlCanvasManager != 'undefined') {
        base.canvas = G_vmlCanvasManager.initElement(base.canvas);
    }
    var context = base.canvas.getContext("2d");

    var paint = false;
    var curSize = "normal";
    var clickSize = [];
    var clickX = [];
    var clickY = [];
    var clickDrag = [];

    //colors
    var colorBlack = "#000000";         //0
    var colorWhite = "#FFFFFF";         //1
    var colorDarkBlue = "#1a1a76";      //2
    var colorLightBlue = "#87CEFA";     //3
    var colorLightGreen = "#ADFF2F";    //4
    var colorDarkGreen = "#044c04";     //5
    var colorYellow = "#FFFF00";        //6
    var colorDarkRed = "#950000";       //7
    var colorRed = "#f20b0b";           //8
    var colorOrange = "#FFA500";        //9
    var colorPurple = "#800080";        //10
    var colorMagenta = "#fa1afa";       //11
    var colorPink = "#fdb4c0";          //12
    var colorBeige  = "#ffdca9";        //13
    var colorLightGrey = "#D3D3D3";     //14
    var colorDarkGrey = "#8D8D8D";      //15
    var colorDarkBrown = "#4f2a0a";     //16
    var colorLightBrown = "#bb5205";    //17

    var clickColor = [];
    //default color
   var curColor = colorDarkGreen;

    //coloring image
    var outline = document.createElement("img");
    outline.src = "js/jscoloring/img/dragon2.png";
    outline.alt = "image of a cartoon dragon";
    outline.className = "coloringImage";

    //draw outline image on the canvas
    context.drawImage(outline, 0, 0, 780, 513);

    //When mousebutton is pressed down - the function finds the mouse's coordinates and calls the appropriate functions.
    base.canvas.onmousedown=function(e){
        console.log("on mouse down");
        var mouseX = e.pageX - this.offsetLeft;
        var mouseY = e.pageY - this.offsetTop;
        paint = true;
        addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        redraw();
    };
    //When mousebutton is moved the function traces the mouse's coordinates and calls the appropriate functions..
    base.canvas.onmousemove=function(e){
        console.log("on mouse move");
        if(paint){
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
            redraw();
        }
    };
    //When the mousebutton is released OR mouse moves off the canvas area the function stops drawing.
    base.canvas.onmouseup=function(e){
        console.log("on mouse up");
        paint = false;
    };
    base.canvas.onmouseout=function(e){
        console.log("on mouse out");
        paint = false;
    };
    //this function saves the position of the mouse
    function addClick(x, y, dragging)
    {
        clickX.push(x);
        clickY.push(y);
        clickDrag.push(dragging);
        clickColor.push(curColor);
        clickSize.push(curSize);
    }


        var colorSwatches = document.createElement("div");
        colorSwatches.className = "bigColorDiv";
        var drawingTools = document.createElement("div");
        drawingTools.className = "bigToolDiv";

        var black = document.createElement("img");
        black.src = "js/jscoloring/img/swatches/black.jpg";
        black.alt ="Black";
        black.className = "colorswatches";
        black.onclick = function(){
        console.log("pen selected");
        curColor = "black";
        console.log(curColor);
        };

        var white = document.createElement("img");
        white.src = "js/jscoloring/img/swatches/white.jpg";
        white.alt = "White";
        white.className = "colorswatches";
        white.onclick = function(){
        console.log("pen selected");
        curColor = "white";
        console.log(context.strokeStyle);
        };

        var darkBlue = document.createElement("img");
        darkBlue.src = "js/jscoloring/img/swatches/darkblue.jpg";
        darkBlue.alt ="Dark blue";
        darkBlue.className = "colorswatches";
        darkBlue.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[2];
        console.log(context.strokeStyle);
         };

        var lightBlue = document.createElement("img");
        lightBlue.src = "js/jscoloring/img/swatches/lightblue.jpg";
        lightBlue.alt="Light blue";
        lightBlue.className = "colorswatches";
        lightBlue.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[3];
        console.log(context.strokeStyle);
        };

        var lightGreen = document.createElement("img");
        lightGreen.src = "js/jscoloring/img/swatches/lightgreen.jpg";
        lightGreen.alt="Light green";
        lightGreen.className = "colorswatches";
        lightGreen.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[4];
        console.log(context.strokeStyle);
        };
        var darkGreen = document.createElement("img");
        darkGreen.src = "js/jscoloring/img/swatches/darkgreen.jpg";
        darkGreen.alt="Dark green";
        darkGreen.className = "colorswatches";
        darkGreen.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[5];
        console.log(context.strokeStyle);
        };

        var yellow = document.createElement("img");
        yellow.src = "js/jscoloring/img/swatches/yellow.jpg";
        yellow.alt="Yellow";
        yellow.className = "colorswatches";
        yellow.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[6];
        console.log(context.strokeStyle);
        };

        var darkRed = document.createElement("img");
        darkRed.src = "js/jscoloring/img/swatches/darkred.jpg";
        darkRed.alt="Dark red";
        darkRed.className = "colorswatches";
        darkRed.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[7];
        console.log(context.strokeStyle);
        };

        var red = document.createElement("img");
        red.src = "js/jscoloring/img/swatches/red.jpg";
        red.alt="Red";
        red.className = "colorswatches";
        red.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[8];
        console.log(context.strokeStyle);
        };

        var orange = document.createElement("img");
        orange.src = "js/jscoloring/img/swatches/orange.jpg";
        orange.alt="Orange";
        orange.className = "colorswatches";
        orange.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[9];
        console.log(context.strokeStyle);
        };

        var purple = document.createElement("img");
        purple.src = "js/jscoloring/img/swatches/purple.jpg";
        purple.alt ="Purple";
        purple.className = "colorswatches";
        purple.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[10];
        console.log(context.strokeStyle);
        };

        var magenta = document.createElement("img");
        magenta.src = "js/jscoloring/img/swatches/magenta.jpg";
        magenta.alt ="Magenta";
        magenta.className = "colorswatches";
        magenta.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[11];
        console.log(context.strokeStyle);
        };

        var pink = document.createElement("img");
        pink.src = "js/jscoloring/img/swatches/pink.jpg";
        pink.alt = "Pink";
        pink.className = "colorswatches";
        pink.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[12];
        console.log(context.strokeStyle);
        };
        var beige  = document.createElement("img");
        beige.src = "js/jscoloring/img/swatches/beige.jpg";
        beige.alt ="Beige";
        beige.className = "colorswatches";
        beige.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[13];
        console.log(context.strokeStyle);
        };

        var lightGrey = document.createElement("img");
        lightGrey.src = "js/jscoloring/img/swatches/lightgrey.jpg";
        lightGrey.alt = "Light Grey";
        lightGrey.className = "colorswatches";
        lightGrey.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[14];
        console.log(context.strokeStyle);
        };

        var darkGrey = document.createElement("img");
        darkGrey.src = "js/jscoloring/img/swatches/darkgrey.jpg";
        darkGrey.alt ="Dark grey";
        darkGrey.className = "colorswatches";
        darkGrey.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[15];
        console.log(context.strokeStyle);
        };

        var darkBrown = document.createElement("img");
        darkBrown.src = "js/jscoloring/img/swatches/darkbrown.jpg";
        darkBrown.alt="Dark brown";
        darkBrown.className = "colorswatches";
        darkBrown.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[16];
        console.log(context.strokeStyle);
        };

        var lightBrown = document.createElement("img");
        lightBrown.src = "js/jscoloring/img/swatches/lightbrown.jpg";
        lightBrown.alt = "Light brown";
        lightBrown.className = "colorswatches";
        lightBrown.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[17];
        console.log(context.strokeStyle);
        };



        colorSwatches.appendChild(darkBlue);
        colorSwatches.appendChild(lightBlue);
        colorSwatches.appendChild(lightGreen);
        colorSwatches.appendChild(darkGreen);
        colorSwatches.appendChild(yellow);
        colorSwatches.appendChild(darkRed);
        colorSwatches.appendChild(red);
        colorSwatches.appendChild(orange);
        colorSwatches.appendChild(purple);
        colorSwatches.appendChild(magenta);
        colorSwatches.appendChild(pink);
        colorSwatches.appendChild(beige);
        colorSwatches.appendChild(lightGrey);
        colorSwatches.appendChild(darkGrey);
        colorSwatches.appendChild(white);
        colorSwatches.appendChild(black);
        colorSwatches.appendChild(darkBrown);
        colorSwatches.appendChild(lightBrown);

        base.contentDiv.appendChild(colorSwatches);

        base.smallSize = document.createElement("img");
        base.normalSize = document.createElement("img");
        base.bigSize = document.createElement("img");
    /*    var sizes = [base.smallSize, base.normalSize, base.bigSize];
         sizes.forEach(function(size){
            document.createElement("img");
            size.src="js/jscoloring/img/pensize.png"
        });
    */

        base.smallSize.src="js/jscoloring/img/pensize.png";
        base.normalSize.src ="js/jscoloring/img/pensize.png";
        base.bigSize.src = "js/jscoloring/img/pensize.png";

        base.smallSize.alt="Small sized drawing tool";
        base.normalSize.alt ="Medium sized drawing tool";
        base.bigSize.alt = "Big sized drawing tool";


        base.smallSize.className="smalltool";
        base.normalSize.className ="mediumtool";
        base.bigSize.className = "tool";

        base.eraser = document.createElement("img");
        base.eraser.src = "js/jscoloring/img/eraser.png";
        base.eraser.alt = "Eraser tool";
        base.eraser.className = "tool";

        base.pen = document.createElement("img");
        base.pen.src = "js/jscoloring/img/pen.png";
        base.pen.alt = "Pen tool";
        base.pen.className = "tool";

        var smallDiv = document.createElement("div");
        var normalDiv = document.createElement("div");
        var largeDiv = document.createElement("div");
        var eraserDiv = document.createElement("div");
        var penDiv = document.createElement("div");

        var tooldivs = [smallDiv, normalDiv, largeDiv, eraserDiv, penDiv];
        tooldivs.forEach(function(sizeDivs){
            sizeDivs.className = "tooldivs";
        });


        smallDiv.appendChild(base.smallSize);
        normalDiv.appendChild(base.normalSize);
        largeDiv.appendChild(base.bigSize);
        penDiv.appendChild(base.pen);
        eraserDiv.appendChild(base.eraser);

        drawingTools.appendChild(penDiv);
        drawingTools.appendChild(eraserDiv);
        drawingTools.appendChild(smallDiv);
        drawingTools.appendChild(normalDiv);
        drawingTools.appendChild(largeDiv);


        base.contentDiv.appendChild(drawingTools);


    base.smallSize.onclick = function(){
        console.log("small size");
        curSize = 5;
    };
    base.normalSize.onclick = function(){
        console.log("normal size");
        curSize = 15;
    };
    base.bigSize.onclick = function(){
        console.log("big size");
        curSize = 30;
    };

    base.pen.onclick = function(){
        console.log("pen selected");
        context.strokeStyle  = clickColor[0];
        console.log(context.strokeStyle);
    };

    base.eraser.onclick = function(){
        console.log("eraser selected");
        context.strokeStyle = clickColor[1];
        console.log(context.strokeStyle);
    };


    //this function saves and redraws all the information that has been "drawn" on the canvas
    //each time the function is called.
    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
        context.lineJoin = "round";
        for(var i=0; i < clickX.length; i++) {
            context.beginPath();
            if(clickDrag[i] && i){
                context.moveTo(clickX[i-1], clickY[i-1]);
            }else{
                context.moveTo(clickX[i]-1, clickY[i]);
            }
            context.lineTo(clickX[i], clickY[i]);
            context.closePath();
            context.strokeStyle = clickColor[i];
            context.lineWidth = clickSize[i];
            context.stroke();
            }
        context.drawImage(outline, 0, 0, 780, 513);
    }
};



//Place a-tags around images ?
//create basic CSS to avoid scrolling
//troubleshoot onclick-functions


