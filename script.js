const startingMinutes=25;
let time=startingMinutes*60;

const coundownEL=document.querySelector("#inital_time");

setInterval(updateCountdown,1000);


function updateCountdown(){
    const minutes=Math.floor(time/60);
    let seconds=time%60;
    countdownEl.innerHtml=`${minutes}:${seconds}`;
    time--;
}







