let work=document.querySelector("#work");
let breakwork=document.querySelector("#break");

let workTime=25;
let breakTime=5;

let seconds="00";


window.onload=()=>{
    document.querySelector("#minutes").innerHTML=workTime;
    document.querySelector("#seconds").innerHTML=seconds;
    work.classList.add('active');
}

// timer getting started here

function start(){
    document.querySelector("#start").style.display="none";
    document.querySelector("#reset").style.display="block";

    seconds=59;
    let workMinutes=workTime-1;
    let breakMinutes=breakTime-1;
    breakCount=0;
    console.log(seconds);
    // countdown
    let timerFunction=()=>{
        document.querySelector("#minutes").innerHTML=workMinutes;
        document.querySelector("#seconds").innerHTML=seconds;
        seconds=seconds-1;  
        if(seconds===0)
        {
            workMinutes=workMinutes-1;
            if(workMinutes===-1)
            {
                if(breakCount%2===0)
                {
                    workMinutes=breakMinutes;
                    breakCount++;
                    // changing the panel
                    work.classList.remove("active");
                    breakwork.classList.add("active");
                }
                else{
                    workMinutes=workTime;
                    breakCount++;
                    breakwork.classList.remove("active");
                    work.classList.add("active");
                }
            }
            seconds=59;
        }
    }

    // start countdown
    setInterval(timerFunction,1000);
}

