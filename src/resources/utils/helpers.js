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

export {
    getDefaultInputValue
}
