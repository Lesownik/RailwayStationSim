$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});




function draw1() {
    var canvas=document.getElementById("workbench");
    var pdf=canvas.getContext("2d");
    var svg = new esvah;
    img.onload = function(){ pdf.drawImage(img,0,0); };
    img.src = "http://www.w3.org/TR/SVG11/images/painting/fillrule-evenodd.svg";


}

function drawSomethingOne(){

var c=document.getElementById("workbench");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(200,250);
ctx.bezierCurveTo(20,100,500,100,300,50);
ctx.stroke();

}

function drawSomethingTwo(){

var c=document.getElementById("workbench");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.moveTo(500,250);
ctx.bezierCurveTo(30,500,300,100,300,50);
ctx.stroke();

}
