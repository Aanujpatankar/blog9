canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("Zd");





ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth =2;
ctx.arc(50 ,200 , 40 , 0 ,2*Math:PI);
ctx.strokeStyle();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{



    mouse_x = e.clientX - canvas.offsetLeft;
    
    mouse_y = e.clientY - canvas.offsetTop;
    circle();





}
function circle(){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.linewidth =2;
    ctx.arc(50 ,200 , 40 , 0 ,2*Math:PI);
    ctx.strokeStyle();   


}