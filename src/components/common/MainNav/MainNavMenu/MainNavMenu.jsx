/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import store             from '../../../../store/store.js';
import i18next           from '../../../../resources/utils/i18n.js';

import api               from '../../../../resources/utils/wretch.js';
import constants         from '../../../../resources/utils/constants.js';


@translate()
@subscribe(store, s => ({
    menu: s.menu
}))
class MainNavMenu extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <div className="main-nav_menu grid is-4-columns">
                { this.props.menu.map(menuItem =>
                        <a className="main-nav_menu_item">
                            <span className="main-nav_menu_item_title">{menuItem}</span>
                        </a>

                    )
                }
            </div>
        )
    }
}

export default MainNavMenu;
