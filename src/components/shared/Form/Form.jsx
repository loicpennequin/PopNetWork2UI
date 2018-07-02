/**
 * Main Form component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React   from 'react';
import api     from  '../../../resources/utils/wretch.js';

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
            Object.assign(values, { [field.name] : field.defaultValue || this.getDefaultValue(field.type) }),
            {}
        );
    }

    getDefaultValue(type){
        return '';
    }

    async onFieldChange(e) {
        await this.setState({
            values : Object.assign( this.state.values, { [e.target.name] : e.target.value })
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        let response = await this.props.action(this.state.values)
        console.log(response);
    }

    render() {
        const inputs = this.props.fields.map(field =>
            <React.Fragment>
                <label>{field.label}</label>
                <input key={`${this.props.name}-${field.name}`}
                       name={field.name}
                       value={this.state.values[field.name]}
                       type={field.type}
                       options={field.options}
                       placeholder={field.placeholder}
                       onChange={e => this.onFieldChange(e)}
                       />
            </React.Fragment>
        );
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                {inputs}
                <input type="submit" value="submit" />
            </form>
        )
    }
}

export default Form;
