var mouseEvent = "empty";

var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color= "Black";
var width= 4;
var radius= 20;

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e)
{
    color= document.getElementById("input1").value;
    width= document.getElementById("input2").value;
    radius= document.getElementById("input3").value;
    mouseEvent ="mousedown";
} 

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent ="mouseup";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e)
{ 
 var current_position_x = e.clientX - canvas.offsetLeft;
 var current_position_y = e.clientY - canvas.offsetTop;

 if(mouseEvent=="mousedown")
 {
     ctx.beginPath();
     ctx.strokeStyle= color;
     ctx.lineWidth= width;
     ctx.arc(current_position_x ,current_position_y , radius , 0, 2*Math.PI);
     ctx.stroke();
 }
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent ="mouseleave";
}

function clear1()
{
    ctx.clearRect(0 , 0 , ctx.canvas.width, ctx.canvas.height);
}