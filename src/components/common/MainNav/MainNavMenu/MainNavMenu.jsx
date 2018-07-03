/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import { NavLink }          from 'react-router-dom';
import store             from '../../../../store/store.js';
import i18next           from '../../../../resources/utils/i18n.js';

import api               from '../../../../resources/utils/wretch.js';
import constants         from '../../../../resources/utils/constants.js';


@translate()
@subscribe(store, s => ({
    menu: s.menu,
    toggle: s.actions.toggleMenu
}))
class MainNavMenu extends React.Component {
    render() {
        const { t } = this.props;

        return (
            <div className="main-nav_menu grid is-4-columns">
                { this.props.menu.map(menuItem =>
                        <NavLink to={menuItem.path}
                                 className="main-nav_menu_item"
                                 activeClassName="active"
                                 onClick={this.props.toggle}>
                            <span className="main-nav_menu_item_title">{t(menuItem.label)}</span>
                        </NavLink>

                    )
                }
            </div>
        )
    }
}

export default MainNavMenu;
