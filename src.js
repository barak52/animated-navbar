var tl = gsap.timeline();

tl.to(".menu",{
    right:0,
    duration:0.9,

})

tl.from(".nav a",{
    x:300,
    duration:0.8,
    opacity:0,
    stagger:0.29,   

})
tl.from(".close",{
    opacity:0,
})
tl.pause()


var menu=document.querySelector(".icon i");
var close=document.querySelector(".close i");

var clor=document.querySelector(".close ");

menu.addEventListener("click",function(){

    tl.play()


}
  
);



close.addEventListener("click",function(){
    tl.reverse();
    close.style.color = '#ffff';
    clor.style.backgroundColor = '#000';
     


    
})