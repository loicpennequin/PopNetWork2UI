/**
 * Home page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';

import HomeHeader   from './HomeHeader/HomeHeader.jsx';

@translate()
class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { t } = this.props;
        return (
            <div className="home">
                <HomeHeader />
            </div>
        )
    }
}

export default Home;
