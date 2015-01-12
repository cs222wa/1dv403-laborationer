"use strict";
var PWD = PWD||{};  //Namespace

PWD.Coloring = function(x, y){
    this.WindowConstructor("img/desktop/bscoloringicon.png", "Målarbok", x, y, 780+"px", 700+"px");
    this.desktop = document.getElementById("desktop");
    this.canvas = undefined;
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
    var radius = 0;
    var smallSize;
    var normalSize;
    var bigSize;
    var curSize = "normal";
    var clickSize = [];
    var clickX = [];
    var clickY = [];
    var clickDrag = [];
    var clickColor = [];

    //colors
    var colorDarkBlue = "#1a1a76";
    var colorLightBlue = "#87CEFA";
    var colorLightGreen = "#ADFF2F";
    var colorDarkGreen = "#044c04";
    var colorYellow = "#FFFF00";
    var colorDarkRed = "#950000";
    var colorRed = "#f20b0b";
    var colorOrange = "#FFA500";
    var colorPurple = "#800080";
    var colorMagenta = "#fa1afa";
    var colorPink = "#fdb4c0";
    var colorBeige  = "#ffdca9";
    var colorLightGrey = "#D3D3D3";
    var colorDarkGrey = "#8D8D8D";
    var colorWhite = "#FFFFFF";
    var colorBlack = "#000000";
    var colorDarkBrown = "#4f2a0a";
    var colorLightBrown = "#bb5205";

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


    renderTools();
    function renderTools(){

        var toolsDiv = document.createElement("div");
        var colorSwatches = document.createElement("div");
        var drawingTools = document.createElement("div");

        var darkBlue = document.createElement("img");
        darkBlue.src = "js/jscoloring/img/swatches/darkblue.jpg";
        darkBlue.alt ="Dark blue";
        var lightBlue = document.createElement("img");
        lightBlue.src = "js/jscoloring/img/swatches/lightblue.jpg";
        lightBlue.alt="Light blue";
        var lightGreen = document.createElement("img");
        lightGreen.src = "js/jscoloring/img/swatches/lightgreen.jpg";
        lightGreen.alt="Light green";
        var darkGreen = document.createElement("img");
        darkGreen.src = "js/jscoloring/img/swatches/darkgreen.jpg";
        darkGreen.alt="Dark green";
        var yellow = document.createElement("img");
        yellow.src = "js/jscoloring/img/swatches/yellow.jpg";
        yellow.alt="Yellow";
        var darkRed = document.createElement("img");
        darkRed.src = "js/jscoloring/img/swatches/darkred.jpg";
        darkRed.alt="Dark red";
        var red = document.createElement("img");
        red.src = "js/jscoloring/img/swatches/red.jpg";
        red.alt="Red";
        var orange = document.createElement("img");
        orange.src = "js/jscoloring/img/swatches/orange.jpg";
        orange.alt="Orange";
        var purple = document.createElement("img");
        purple.src = "js/jscoloring/img/swatches/purple.jpg";
        purple.alt ="Purple";
        var magenta = document.createElement("img");
        magenta.src = "js/jscoloring/img/swatches/magenta.jpg";
        magenta.alt ="Magenta";
        var pink = document.createElement("img");
        pink.src = "js/jscoloring/img/swatches/pink.jpg";
        pink.alt = "Pink";
        var beige  = document.createElement("img");
        beige.src = "js/jscoloring/img/swatches/beige.jpg";
        beige.alt ="Beige";
        var lightGrey = document.createElement("img");
        lightGrey.src = "js/jscoloring/img/swatches/lightgrey.jpg";
        lightGrey.alt = "Light Grey";
        var darkGrey = document.createElement("img");
        darkGrey.src = "js/jscoloring/img/swatches/darkgrey.jpg";
        darkGrey.alt ="Dark grey";
        var white = document.createElement("img");
        white.src = "js/jscoloring/img/swatches/white.jpg";
        white.alt = "White";
        var black = document.createElement("img");
        black.src = "js/jscoloring/img/swatches/black.jpg";
        black.alt ="Black";
        var darkBrown = document.createElement("img");
        darkBrown.src = "js/jscoloring/img/swatches/darkbrown.jpg";
        darkBrown.alt="Dark brown";
        var lightBrown = document.createElement("img");
        lightBrown.src = "js/jscoloring/img/swatches/lightbrown.jpg";
        lightBrown.alt = "Light brown";


        smallSize = document.createElement("img");
        normalSize = document.createElement("img");
        bigSize = document.createElement("img");
        var sizes = [smallSize, normalSize, bigSize];
        sizes.forEach(function(size){
            document.createElement("img");
            size.src="js/jscoloring/img/pensize.png"
        });

        smallSize.alt="Small sized drawing tool";
        normalSize.alt ="Medium sized drawing tool";
        bigSize.alt = "Big sized drawing tool";

        smallSize.onclick = function(){
            console.log("small size");
            radius = 5;
        };
        normalSize.onclick = function(){
            console.log("normal size");
            radius = 15;
        };
        bigSize.onclick = function(){
            console.log("big size");
            radius = 30;
        };



        //create one img for erasor - onclick sets color of pen to same color as background.
        //create one img for pen - onclick sets color to default color
        //create one div for each elemnt in "pens" - sizes: name them small, normal, large. erazer and pen.
        //append each element to correct div. with correct onclick-functions attached to them
        //append divs to "pens"-div.
        //append colors to div "swatches"
        //append "swatches" and "pens" to "tools"-div.
        //append "tools" after "canvas" in "contentDiv".
    }

    //this function saves and redraws all the information that has been "drawn" on the canvas
    //each time the function is called.
    function redraw(){
        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
       /* context.strokeStyle = "#df4b26"; */
        context.lineJoin = "round";
        context.lineWidth = normalSize.onclick();
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
            context.stroke();
            context.lineWidth = radius;
            context.drawImage(outline, 0, 0, 780, 513);
            }
    }
};
