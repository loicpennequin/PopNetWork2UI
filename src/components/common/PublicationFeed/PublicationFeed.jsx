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

import PublicationModel     from '../../../resources/models/PublicationModel.js';

import PublicationFeedItem  from './PublicationFeedItem/PublicationFeedItem.jsx';
import PublicationForm      from './PublicationForm/PublicationForm.jsx';



@translate(["common", "feed"])
class PublicationFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = { isFetching : false, lastScrollTop: 0};
        this.element = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
    }

    async onPublish(body){
        let { id } = await PublicationModel.create(body);
        let publication = await PublicationModel.getById(id);
        this.props.onAdd(publication);
    }

    componentDidMount(){
        if ( this.props.onScroll ){
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    componentWillUnmount(){
        if ( this.props.onScroll ){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    async handleScroll(){
        if ( this.props.allFetched === false && this.state.isFetching === false ) {
            let el = this.element.current.getBoundingClientRect();
            if ( window.scrollY > el.bottom - window.innerHeight ){
                this.setState({ isFetching: true });
                await this.props.onScroll();
                this.setState({ isFetching: false});
            }
        }
    }

    render() {
        const { t } = this.props;

        const list = this.props.publications.map((p,i) => (
            <PublicationFeedItem publication={p} key={'publication' + i}/>
        ));

        return (
            <div className="publication-feed" ref={this.element}>
                {this.props.withForm === true ? <PublicationForm onPublish={body => this.onPublish(body)} /> : null}
                {
                    this.props.publications.length > 0
                        ? list
                        : <div className="no-publication">
                            <div className="txt-center"><i className="far fa-eye-slash fa-3x"></i></div>
                            {t('feed:no publication yet')}
                        </div>
                }

            </div>
        )
    }
}

export default PublicationFeed;
