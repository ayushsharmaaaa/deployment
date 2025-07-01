
let minutesValue=0;
let secondsValue=0;
let intervalID;
const buttonSeconds=document.querySelector('.button-seconds');
const buttonMinutes=document.querySelector('.button-minutes');

buttonMinutes.innerText='0';
buttonSeconds.innerText='0';




function updateSeconds(){
    secondsValue++;
    if(secondsValue>=60){
        minutesValue+=1;
        secondsValue=0;
    }
    buttonSeconds.innerHTML=secondsValue;
    buttonMinutes.innerHTML=minutesValue;
}

function startTime(){
    clearInterval(intervalID);
    intervalID=setInterval(updateSeconds,1000)
}
function stopTime(){
    clearInterval(intervalID);
}

function resetTime(){
    secondsValue=0;
    minutesValue=0;
    buttonMinutes.innerText='0';
    buttonSeconds.innerText='0';
}



