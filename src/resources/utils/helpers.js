import moment   from 'moment';
import momentLocaleFr   from 'moment/locale/fr';

import i18n     from './i18n.js';

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

const momentizeObj = obj => {
    moment.locale(i18n.language);
    if ( obj.created_at ) {
        return Object.assign(obj,
            {
                created_at : obj.created_at ? moment(obj.created_at).format('dddd D MMMM') : undefined,
                updated_at : obj.updated_at ? moment(obj.updated_at).format('dddd D MMMM') : undefined
            }
        )
    }
    else return obj;
}

const momentize = value => {
    moment.locale(i18n.language);
    return  moment(value).format('dddd D MMMM');
}

export {
    getDefaultInputValue,
    aggregateErrors,
    momentizeObj,
    momentize
}
