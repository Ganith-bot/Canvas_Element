canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",circle1);
function circle1(e){
    color=document.getElementById("color").value;
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,50,0,2*Math.PI);
    ctx.stroke();
}
function clear1(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}