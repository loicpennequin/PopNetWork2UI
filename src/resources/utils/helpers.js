const getDefaultInputValue = type => {
    switch(type){
        case 'checkbox':
        case 'radio':
            return false;
            break;
        default:
            return '';
    }
}

const aggregateErrors = (errs, fields) => fields.map(field => {
    let errors = errs.filter(error => error.param === field.name)
                      .map(error => error.msg);
    return Object.assign(field, { errors });
})

export {
    getDefaultInputValue,
    aggregateErrors
}
