function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
}

let timerId = null;


refs.startButton.addEventListener('click', (e) =>{
    console.log(e.target);
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
      }, 1000);

      if(refs.startButton.classList.contains('activated')) return;
        refs.stopButton.classList.remove('activated');
        refs.startButton.classList.add('activated');
       
});

refs.stopButton.addEventListener('click', (e) =>{
    clearInterval(timerId);
    console.log(`Interval with id ${timerId} has stopped!`);
    if(refs.stopButton.classList.contains('activated')) return;
        refs.startButton.classList.remove('activated');
        refs.stopButton.classList.add('activated');
        
});