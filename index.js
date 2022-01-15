
console.log('Hello World');
const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);
 

const audio = new Audio('1.mp3');


// function play the alarm ringtone
function ringBell(){
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm (e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    
    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            ringBell();
        }, timeToAlarm);
    }
}