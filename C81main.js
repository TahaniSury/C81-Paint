canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="cyan";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(150,150,40,0, 2* Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    circle(mouse_x,mouse_y);

}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc( mouse_x,mouse_y,40,0, 2* Math.PI);
ctx.stroke();
}
    