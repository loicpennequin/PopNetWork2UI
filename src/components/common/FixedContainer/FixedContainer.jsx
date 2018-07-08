/**
 * Create a container with position fixed that has the same width as its parent element.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import ContainerDimensions  from 'react-container-dimensions';

class FixedContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { isFixed : true };
        this.myRef = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
        if ( this.props.sticky ){
            window.addEventListener('scroll', this.handleScroll)
        }
    }

    componentWillUnmount(){
        if ( this.props.sticky ){
            window.removeEventListener('scroll', this.handleScroll)
        }
    }

    handleScroll(){

    }

    render() {
        return (
            <ContainerDimensions>
                {  ({ width }) =>
                    <div className={this.state.isFixed ? 'fixed-container' : ''}
                         style={{width: width + 'px'}}
                         ref={this.myRef}>
                        {this.props.children}
                    </div>
                }
            </ContainerDimensions>
        )
    }
}

export default FixedContainer;
