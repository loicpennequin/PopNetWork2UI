/**
 * Input Component. Renders an input field with the label and some config
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                     from 'react';
import api                       from  '../../../resources/utils/wretch.js';
import { getDefaultInputValue }  from '../../../resources/utils/helpers.js';
import { translate }             from 'react-i18next';

@translate()
class Input extends React.Component {
    onChange(e){
        if (this.props.onChange) {
            return this.props.onChange(e);
        }
    }

    onFocus(e){
        if (this.props.onFocus) {
            return this.props.onFocus(e);
        }
    }

    onBlur(e){
        if (this.props.onBlur) {
            return this.props.onBlur(e);
        }
    }
    render() {
        const { t } = this.props;
        const errors = this.props.field.errors
            ? this.props.field.errors.map(err => <p>{err}</p>)
            : null;

        return (
            <div className="form-field">
                <label className="label">{t(this.props.field.label)}</label>
                <input className="input"
                       name={this.props.field.name}
                       value={this.props.value}
                       type={this.props.field.type}
                       options={this.props.field.options}
                       placeholder={t(this.props.field.placeholder)}
                       onChange={e => this.onChange(e)}
                       onFocus={e => this.onFocus(e)}
                       onBlur={e => this.onBlur(e)}
                 />
                 {errors}
            </div>
        )
    }
}

export default Input;
