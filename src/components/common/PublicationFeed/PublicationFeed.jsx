/**
 * Component used to display a list of publication, and a form to publish a new publication.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import { subscribe }        from 'react-contextual';
import store                from '../../../store/store.js';
import i18next              from '../../../resources/utils/i18n.js';

import constants            from '../../../resources/utils/constants.js';
import PublicationModel     from '../../../resources/models/PublicationModel.js';

import PublicationFeedItem  from './PublicationFeedItem/PublicationFeedItem.jsx';
import PublicationForm      from './PublicationForm/PublicationForm.jsx';
@translate()
class PublicationFeed extends React.Component {
    constructor(props){
        super(props);
    }

    async onPublish(body){
        await PublicationModel.create(body);
        return this.props.onUpdate();
    }

    render() {
        const list = this.props.publications.map((p,i) => (
            <PublicationFeedItem publication={p} key={'publication' + i}/>
        ));

        return (
            <div className="publication-feed">
                {this.props.withForm == 'true' ? <PublicationForm onPublish={body => this.onPublish(body)} /> : null}
                {
                    this.props.publications.length > 0
                        ? list
                        : <div className="no-publication">
                            <div className="txt-center"><i class="far fa-eye-slash fa-3x"></i></div>
                            Cet utilisateur n'a pas encore de publication. revenez plus tard !
                        </div>
                }

            </div>
        )
    }
}

export default PublicationFeed;
