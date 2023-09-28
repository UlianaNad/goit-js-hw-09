import { Notify } from 'notiflix/build/notiflix-notify-aio';
const options ={
  width: '320px',
  timeout: 10000,
}
const formEl = document.querySelector('.form');


formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const {elements: { delay, step, amount }} = e.currentTarget;

  for(let i = 0; i < amount.value; i += 1){

    let position = i + 1;
    const delayValue = Number(delay.value) + step.value * i;

    createPromise(position, delayValue)
    .then(({position, delay}) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms!`, options)
    })
    .catch(({position, delay}) => {
      Notify.warning(`❌ Rejected promise ${position} in ${delay}ms!`, options)
    })
  }
});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}
