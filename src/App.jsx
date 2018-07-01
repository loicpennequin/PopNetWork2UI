/**
 * Main App component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React                             from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: ""
        };
    }

    async componentDidMount(){
        const rawData = await fetch('http://localhost:8000/api/test');
        const data = await rawData.json();
        this.setState({message : data.message});
    }

    render() {
        return (
            <h1>{this.state.message}</h1>
        )
    }
}

export default App;
