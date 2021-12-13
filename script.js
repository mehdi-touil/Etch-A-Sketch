var n=16;
function create(){
for(let i=0;i<n;i++){for(let j=0;j<n;j++){
  const elm=document.createElement("div");
  elm.classList.add("square");
  document.getElementById("grid").appendChild(elm);
}}}

create();
function mousecolor(){
const divs=document.getElementsByClassName("square");
for(let div of divs){div.addEventListener('mouseenter',()=>{const randomColor = Math.floor(Math.random()*16777215).toString(16);
  let rcolor="#" + randomColor ;
  div.style.backgroundColor=rcolor;
});}
}
mousecolor();
btn=document.querySelector("button");
btn.addEventListener('click',
()=>{const divs=document.getElementsByClassName("square");
var node = document.getElementById('grid');
node.innerHTML = "";
n =prompt("enter the number of squares per side-between 1 and 100");
var grid = document.getElementById("grid");
var m=((30*16/n)+'px'+' ').repeat(n);
grid.style.gridTemplateRows=m;
grid.style.gridTemplateColumns=m;
create();

mousecolor();

});



  


