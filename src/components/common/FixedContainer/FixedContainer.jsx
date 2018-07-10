/**
 * Create a container with position fixed that has the same width as its parent element.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                from 'react';
import ContainerDimensions  from 'react-container-dimensions';
import { Scrollbars } from 'react-custom-scrollbars';


class FixedContainer extends React.Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <ContainerDimensions>
                {  ({ width, height, top }) =>
                    <div className="fixed-container">
                        <Scrollbars style={{width: width + 'px', height: window.innerHeight - top}}
                                    className="fixed-container"
                                    autoHide>
                            {this.props.children}
                        </Scrollbars>
                    </div>
                }
            </ContainerDimensions>
        )
    }
}

export default FixedContainer;
