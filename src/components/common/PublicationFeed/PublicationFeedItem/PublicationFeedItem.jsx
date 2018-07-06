/**
 * Component used to display a list of publication, and a form to publish a new publication.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import i18next              from '../../../../resources/utils/i18n.js';

import Avatar               from '../../Avatar/Avatar.jsx';

@translate()
class PublicationFeedItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { publication } = this.props;

        return (
            <div className="publication-feed_item">
                <div className="publication-feed_item_header">
                    <Avatar size="small" user={publication.author}
                            className="publication-feed_item_header-avatar"/>
                    <div>
                        <div className="author">{publication.author.username} </div>
                        <div className="metadata">le {publication.created_at} :</div>
                    </div>
                </div>
                <div className="publication-feed_item_body">
                    {publication.body}
                </div>
            </div>
        )
    }
}

export default PublicationFeedItem;
