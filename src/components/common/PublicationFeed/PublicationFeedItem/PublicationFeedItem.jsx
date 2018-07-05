/**
 * Component used to display a list of publication, and a form to publish a new publication.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import i18next              from '../../../../resources/utils/i18n.js';

@translate()

class PublicationFeedItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>{this.props.publication.body}</div>
        )
    }
}

export default PublicationFeedItem;
