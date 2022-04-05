'use strict';

import dom from './dom.js';

const checkbox = ({
    parent = false,
    checked = false,
    legend = '',
    callback = false
} = {}) => {
    const container = dom.create({
        classes: ['containerCheckbox'],
        parent,
    })

    // Legend 
    dom.create({
        content: legend,
        parent: container,
        type: 'span',
        classes: ['legend']
    })

    // Checkbox
    const cb = dom.create({
        type:'input',
        attr:{
            type:'checkbox'
        },
        parent:container
    })
    if(checked) cb.checked = true;
    if(callback) cb.addEventListener('change', callback);


}

export default checkbox;