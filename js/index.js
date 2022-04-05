'use strict';

import components from './components/index.js';

const main = document.querySelector('main');

const init = () => {
    components.checkbox({
        parent: main,
        legend: 'Testtest',
        callback(evt){
            console.log(evt.target);
        },
        checked:true
    })
}

init();