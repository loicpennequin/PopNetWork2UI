/**
 * Component used to display an user avatar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React    from 'react';
import { Link } from 'react-router-dom';

import cl       from '../../../resources/services/imageService.js';

class Avatar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Link to={'/profile/' + (this.props.user.id)}>
                {
                    this.props.user.profile_picture_url !== null
                    ? <img src={cl.url(this.props.user.profile_picture_url)}
                           className={`avatar ${this.props.size} ${this.props.className} `}/>
                    : <div className={`avatar empty ${this.props.size} ${this.props.className} `}>
                        {this.props.user.username.slice(0,1).toUpperCase()}
                    </div>
                }
            </Link>
        )
    }
}

export default Avatar;
