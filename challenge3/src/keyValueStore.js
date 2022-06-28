function getValue(key, object) {

    if(!key || !object) {
        return '';
    }

    let value = object;
    let parts = key.split('/');

    for(let i=0; i<parts.length; i++) {
        if(typeof value === 'object') {
            value = value[parts[i]];
        }
    }
   
   return value || '';
}

exports.getValue = getValue;