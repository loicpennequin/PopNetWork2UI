/**
 * Component used to display an user avatar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React    from 'react';

import cl       from '../../../resources/services/imageService.js';

class Avatar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        if ( this.props.user.profile_picture_url !== null ){
            return (
                <img src={cl.url(this.props.user.profile_picture_url)}
                     className={`avatar ${this.props.size} ${this.props.className} `}/>
            )
        } else {
            return (
                <div className={`avatar empty ${this.props.size} ${this.props.className} `}>
                    {this.props.user.username.slice(0,1).toUpperCase()}
                </div>
            )
        }
    }
}

export default Avatar;
