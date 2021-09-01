import './sass/main.scss';
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const bodyEl = document.body
const startBtn = document.querySelector('[data-action]')
const stopBtn = document.querySelector('[data-action="stop"]')
let timerId = null

const colorSwitch = () => {
    if(timerId){
        return
    }
    timerId=setInterval(() => {
        
        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    
        bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0,5)]
    },1000) 
    
}

startBtn.addEventListener("click", colorSwitch)

stopBtn.addEventListener('click', ()=>{clearInterval(timerId)})


  