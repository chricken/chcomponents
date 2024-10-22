'use strict';

import '/node_modules/chComponents/index.js';

const main = document.querySelector('main');

const myInput = document.createElement('ch-input');
main.append(myInput);

myInput.addEventListener('input', ({ detail: res }) => {
    // console.log(res);

})

const yourInput = document.createElement('ch-range');
yourInput.update({
    value: 400,
    min: 100,
    max: 1000,
    step: 100
})
main.append(yourInput)

