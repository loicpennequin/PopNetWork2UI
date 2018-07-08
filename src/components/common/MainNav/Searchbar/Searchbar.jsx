/**
 * User search bar
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React from 'react';
import OnOutsideClick from '../../OnOutsideClick/OnOutsideClick.jsx';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state = { value : ''};
    }

    render(){
        return(
            <div>
                <input type="text"
                       value={this.state.value}
                       placeholder="Search a user"/>
            </div>
        )
    }
}

export default Searchbar;
