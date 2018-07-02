/**
 * Main Form component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                     from 'react';
import api                       from  '../../../resources/utils/wretch.js';
import { getDefaultInputValue }  from '../../../resources/utils/helpers.js';

import Input                     from '../Input/Input.jsx';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields : this.props.fields,
            success: false,
            values : this.getInitialValues()
        }
    }

    getInitialValues(){
        return this.props.fields.reduce((values, field) =>
            Object.assign(values, { [field.name] : field.defaultValue || getDefaultInputValue(field.type) }),
            {}
        );
    }


    async onFieldChange(e) {
        await this.setState({
            values : Object.assign( this.state.values, { [e.target.name] : e.target.value })
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        let response = await this.props.action(this.state.values)
    }

    render() {
        const inputs = this.props.fields.map(field =>
            <React.Fragment>
                <Input key={`${this.props.name}-${field.name}`}
                       field={field}
                       value={this.state.values[field.name]}
                       onChange={e => this.onFieldChange(e)}
                       />
            </React.Fragment>
        );
        return (
            <form onSubmit={e => this.onSubmit(e)} noValidate>
                {inputs}
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form;
