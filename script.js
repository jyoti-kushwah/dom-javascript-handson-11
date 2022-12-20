let a= document.getElementById("text");
console.log(a.innerText);

let tagName= document.getElementsByTagName("h1");
console.log(tagName[0].innerText);

let c = document.getElementsByClassName("box1");
console.log(c[0].innerText)

function timer (){
    let times = new Date()
    let hr = times.getHours();
    let min = times.getMinutes();
    let sec = times.getSeconds(); 
    // document.getElementById("clock").innerHTML = hr +":" + min + ":" + sec + ":";
    document.getElementById("clock").innerHTML=`${hr}  ${min} ${sec}`;
    // setInterval(timer,1000);
}
setInterval(timer,1000);
// setInterval(timer,5000) again and again
// setTimeout(timer,5000)  once after 5 sec
console.log("something")

let container = document.getElementById("container");
let boxelement=document.getElementsByClassName("box");
let btn=document.getElementById("btn");
btn.addEventListener("click",function(){
    debugger
    container.style.flexDirection = "column";
    // flex-box.style.margin
})

let helloElement=document.getElementById("hello")
helloElement.addEventListener("mouseenter",function(){
    helloElement.style.color="blue";
    helloElement.innerText="Hello";
})
// let helloElement=document.getElementById("hello")
helloElement.addEventListener("mouseleave",function(){
    helloElement.style.color="crimson";
    helloElement.innerText="Hello World";
})

let headingElement=document.getElementById("heading").style.color="red";

let btnsElement=document.getElementById("btn")
btnsElement.addEventListener("mouseenter",function(){
    //   document.getElementById("text").innerText="Welcome to elevetion  Academy"
    btnsElement.style.color='crimson';
    document.getElementById("text").innerText="WELCOME TO ELEVATION ACADEMY"
})
//   element.addEventListener("click",myfunction)

   


 


 





