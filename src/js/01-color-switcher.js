function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const refs = {
    startButton: document.querySelector('[data-start]'),
    stopButton: document.querySelector('[data-stop]'),
    body: document.body,
}


class ColorChange{
    constructor(){
        this.timerId = null;
        this.isActive = false;
    }

    start(){
        if(this.isActive) return;

        this.timerId = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
            
        }, 1000);
        this.isActive = true;
    }

    stop(){
        if(!this.isActive) return;

        refs.body.style.backgroundColor = 'white';
        clearInterval(this.timerId);

        this.isActive = false;
    }
}

const colorChange = new ColorChange;

refs.startButton.addEventListener('click', () =>{
    colorChange.start();
});

refs.stopButton.addEventListener('click', () => {
    colorChange.stop();
});