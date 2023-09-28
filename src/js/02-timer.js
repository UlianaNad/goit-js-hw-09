import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    dataPicker : document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.startButton.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {

        this.defaultDate = Date.now();
        const date = new Date(selectedDates);

        if(date > this.defaultDate){

            refs.startButton.disabled = false;

            starter(date);

        } else {
            refs.startButton.disabled = true;

            Notify.warning('Please choose the date in the future!');
        }
    },
  };



let calendar = flatpickr(refs.dataPicker, options);

// /////////////////////////////////////////////////

class Timer {
    constructor(){
        this.timerId = null;
    }
    
    start(time) {
        const finishTime = time;

        this.timerId = setInterval(() => {
           const currentTime = Date.now();
            let difference = finishTime - currentTime;
           let timerTime = convertMs(difference);

           renderTimer(timerTime);

           if (difference < 1000){
            this.stop()
           }

        }, 1000)
    }

   stop(){
    clearInterval(this.timerId);
   }

}
const timer = new Timer();

/////запустити таймер
function starter (startDate){
    refs.startButton.addEventListener('click', () => {
        timer.start(startDate)
    });
}

//рендер у хтмл
function renderTimer({days, hours, minutes, seconds}){

    refs.days.textContent = `${days.toString().padStart(2, '0')}`;
    refs.hours.textContent = `${hours.toString().padStart(2, '0')}`;
    refs.minutes.textContent = `${minutes.toString().padStart(2, '0')}`;
    refs.seconds.textContent = `${seconds.toString().padStart(2, '0')}`;
   
}
// ////////////////////////////

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
