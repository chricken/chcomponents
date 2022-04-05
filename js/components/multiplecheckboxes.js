'use strict';

import dom from './dom.js';
import checkbox from './checkbox.js';

/*
Beispiel-Value:
{
    key1:false,
    key2:true,
    key3:false
}
*/

const multipleCheckboxes = ({
    values = {},
    parent = false
} = {}) => {
    const container = dom.create({
        parent,
        classes:['container'],
    })

    const checkboxes = Object.entries(values).map(value => checkbox({
            parent:container,
            checked:value[1],
            legend:value[0],
        })
    )

    return checkboxes;
}

export default multipleCheckboxes;