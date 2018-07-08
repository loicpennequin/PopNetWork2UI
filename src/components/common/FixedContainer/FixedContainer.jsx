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
    }
    render() {
        return (
            <ContainerDimensions>
                {  ({ width }) =>
                    <div className="fixed-container" style={{width: width + 'px'}}>
                        {this.props.children}
                    </div>
                }
            </ContainerDimensions>
        )
    }
}

export default FixedContainer;
