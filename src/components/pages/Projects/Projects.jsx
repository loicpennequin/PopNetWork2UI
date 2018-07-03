/**
 * Settings page component.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React          from 'react';
import { translate }  from 'react-i18next';
import { subscribe }  from 'react-contextual';
import store          from '../../../store/store.js';

import api            from  '../../../resources/utils/wretch.js';

@translate()
class Settings extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        const { t } = this.props;
        return (
            <React.Fragment>
                <h1>This is the settings page</h1>
            </React.Fragment>
        )
    }
}

export default Settings;
