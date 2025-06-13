let hr=document.getElementById("hr");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
 function display(){
    let date=new Date();

    let hh=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let hrotate=30*hh +m/2;
    let minutes=6*m;
    let seconds=6*s;

    hr.style.transform=`rotate(${hrotate}deg)`;
    min.style.transform=`rotate(${minutes}deg)`;
    sec.style.transform=`rotate(${seconds}deg)`;
    
 }

 setInterval(display,1000);