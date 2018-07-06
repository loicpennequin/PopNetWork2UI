/**
 * Component used to display a list of publication, and a form to publish a new publication.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import { subscribe }        from 'react-contextual';
import store                from '../../../../store/store.js';
import i18next              from '../../../../resources/utils/i18n.js';
import { Scrollbars }       from 'react-custom-scrollbars';

import Form                 from '../../Form/Form.jsx';
import Avatar               from '../../Avatar/Avatar.jsx';

@subscribe(store, s => ({ currentUser : s.currentUser }))
@translate()
class PublicationForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: "",
            focused : false
        }

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.input = React.createRef()
    }

    onFocus(){
        this.setState({ focused: true });
    }

    onBlur(){
        this.setState({ focused: false });
    }
    render() {
        const inputStyle = {height: this.state.focused ? '6em' : '1.5em'};
        return (
            <div className="publication-form">
                <Avatar size="small" user={this.props.currentUser} className="publication-form_avatar"/>
                    <textarea className="publication-form_input"
                              placeholder={this.state.focused === true ? '' : 'Express yourself'}
                              onFocus={this.onFocus}
                              onBlur={this.onBlur}
                              style={inputStyle}></textarea>
                <button className="button is-primary is-rounded">Publier</button>
            </div>
        )
    }
}

export default PublicationForm;
