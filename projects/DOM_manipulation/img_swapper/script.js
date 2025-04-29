var img1=document.querySelector("#img1")
var img2=document.querySelector("#img2")

var btn=document.querySelector("button")

btn.addEventListener("click",()=>{
    var id1=img1.getAttribute('src')
    var id2=img2.getAttribute('src')

    img1.setAttribute('src',id2)
    img2.setAttribute('src',id1)
})