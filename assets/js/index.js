'use strict';

import '/node_modules/chComponents/index.js';

const main = document.querySelector('main');

const myInput = document.createElement('ch-input');
main.append(myInput);

myInput.addEventListener('input', ({ detail: res }) => {
 
})

const yourInput = document.createElement('ch-range');
yourInput.update({
    min: -100,
    max: 1000,
    step: 200,
    values: [100,300,850],
    color: ['#f00', '#0f0', '#ff0'],
    width: 200,
})
main.append(yourInput)

