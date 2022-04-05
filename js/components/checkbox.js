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
        attr:{
            'data-checked': checked
        }
    })

    // Legend 
    const label = dom.create({
        content: legend,
        parent: container,
        type: 'label',
        classes: ['legend']
    })

    // Checkbox
    const cb = dom.create({
        type: 'input',
        attr: {
            type: 'checkbox'
        },
        listeners:{
            change(evt){
                container.dataset.checked = evt.target.checked;
                if ( callback) callback();
            }
        },
        classes: ['cb'],
        parent: label
    })

    if (checked) cb.checked = true;
    

    // Siblings for the style
    const switcher = dom.create({
        classes: ['switcherContainer'],
        parent: label,
    })
    
    dom.create({
        classes: ['knob'],
        parent: switcher,
    })

    return container;

}

export default checkbox;