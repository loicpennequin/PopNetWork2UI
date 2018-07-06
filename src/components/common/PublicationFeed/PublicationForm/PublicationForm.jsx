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

        this.publish = this.publish.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(e){
        this.setState({body: e.target.value});
    }

    onFocus(){
        this.setState({ focused: true });
    }

    onBlur(){
        this.setState({ focused: false });
    }

    async publish(){
        if ( this.state.body !== '' ) {
            await this.props.onPublish({
                body : this.state.body,
                user_id : this.props.currentUser.id
            })
            this.setState({ body: "" });
        }
    }

    render() {
        const inputStyle = {height: this.state.focused ? '6em' : '1.5em'};
        return (
            <div className="publication-form">
                <Avatar size="small" user={this.props.currentUser} className="publication-form_avatar"/>
                    <textarea className="publication-form_input"
                              value={this.state.body}
                              onChange={e => this.onChange(e)}
                              placeholder={this.state.focused === true ? '' : 'Express yourself'}
                              onFocus={this.onFocus}
                              onBlur={this.onBlur}
                              style={inputStyle}></textarea>
                          <button className={`publication-form_submit
                                  button is-primary is-rounded
                                  ${this.state.body !== "" ? '' : 'is-disabled'}`}
                                  onClick={this.publish}>Publier</button>
            </div>
        )
    }
}

export default PublicationForm;
