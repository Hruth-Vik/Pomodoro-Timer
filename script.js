const startingMinutes=25;
let time=startingMinutes*60;

const coundownEL=document.querySelector("#inital_time");

function updateCountdown(){
    time--;
}