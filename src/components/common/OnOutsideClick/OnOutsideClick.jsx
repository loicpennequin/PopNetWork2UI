/**
 * Detects when the user clicks outside of the Children Component
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';


class OnOutsideClick extends React.Component {
    constructor(props){
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside(e){
        let children = Array.from(this.props.element.current.getElementsByTagName("*"));
        let isInside = children.some( node => e.target === node);
        if ( e.target !== this.props.element.current && !isInside ){

            this.props.action();
        }
    }

    render() {
        return (
            <div className="onoutsideclick"ref={this.element}>
                {this.props.children}
            </div>
        )
    }
}


export default OnOutsideClick;
