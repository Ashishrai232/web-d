var sqr=document.querySelector("#square")
var btn=document.querySelector("#but")

btn.addEventListener("click",function(){
    var a1=Math.floor(Math.random()*256)
    var b1=Math.floor(Math.random()*256)
    var c1=Math.floor(Math.random()*256)

    console.log(a1,b1,c1)
  sqr.style.backgroundColor=`rgb(${a1},${b1},${c1})`
})