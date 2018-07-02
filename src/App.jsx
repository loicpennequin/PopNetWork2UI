/**
 * Main App component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React    from 'react';
import { translate } from 'react-i18next';

@translate()
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Soon"
        };
    }

    // async componentDidMount(){
    //     const rawData = await fetch('http://localhost:8000/api/test');
    //     const { message } = await rawData.json();
    //     this.setState({ message });
    // }

    render() {
        const { t } = this.props;
        return (
            <h1>{t(this.state.message)}</h1>
        )
    }
}

export default App;
