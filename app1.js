const color = ["red","blue","black","orange","green","grey","yellow","pink"]
const button = document.getElementById("button")
const canvas = document.getElementById("canvas")
let counter = 1
button.addEventListener("click",()=>{
//let number = Math.floor(Math.random() * 8);
//canvas.style.backgroundColor = color[number];
if(counter<=7){
    canvas.style.backgroundColor = color[counter]
    counter +=1
}
else {
    counter = 0
}
})