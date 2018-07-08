/**
 * Component used to display a list of publication, and a form to publish a new publication.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import { translate }        from 'react-i18next';
import i18next              from '../../../../resources/utils/i18n.js';
import urlRegex             from 'url-regex';

import Avatar               from '../../Avatar/Avatar.jsx';

@translate()
class PublicationFeedItem extends React.Component {
    constructor(props){
        super(props);
    }

    createMarkup() {
        let bodyToParse = this.props.publication.body.slice();
        let urls = bodyToParse.match(urlRegex());

        if ( Array.isArray(urls) ){
            bodyToParse = urls.reduce((acc, url) => {
                if ( url.endsWith('.jpg') ||
                     url.endsWith('.png') ||
                     url.endsWith('.gif') ){
                    return acc.replace(url, '') + `<a href="${url}" target="_blank"><img src="${url}"/></a>`;
                } else {
                    return acc.replace(url, `<a href="${url}">${url}</a>`);
                }
            }, bodyToParse);
        }
        return { __html: bodyToParse };
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
                <div className="publication-feed_item_body"
                     dangerouslySetInnerHTML={this.createMarkup()}></div>
            </div>
        )
    }
}

export default PublicationFeedItem;
