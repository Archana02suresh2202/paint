const canvas= document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let isDrwaing = false;
let lastX =0;
let lastY =0;
let hue =0;
let thickness =1;

canvas.addEventListener("mousedown",startdrawing);
canvas.addEventListener("mousemove",draw);
canvas.addEventListener("mouseout",stopdrawing);
canvas.addEventListener("mouseup",stopdrawing);

function startdrawing(e){
isDrwaing =true;
[lastX,lastY] = [e.offsetX,e.offsetY];


}
function draw(e){
if(!isDrwaing) return;
ctx.beginPath();
ctx.moveTo(lastX,lastY);
ctx.lineTo(e.offsetX,e.offsetY);
ctx.strokeStyle=document.getElementById("color").value ;
ctx.lineWidth =thickness;
ctx.stroke();
[lastX,lastY] = [e.offsetX,e.offsetY];
hue++;
if(hue >= 360) hue=0;


}
function stopdrawing() {
isDrwaing=false;


}
const clearButton=document.getElementById("clear");
clearButton.addEventListener("click",clearcanvas);

function clearcanvas(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}
