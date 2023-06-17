let image=document.querySelectorAll(".images")
function ajay(e){
   e.target.parentElement.prepend(e.target)
}
image.forEach((image)=>{
   image.addEventListener("click",ajay);
})