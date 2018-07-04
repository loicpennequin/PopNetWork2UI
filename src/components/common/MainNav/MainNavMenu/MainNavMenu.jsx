/**
 * Main Navigation Bar.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

import React             from 'react';
import { translate }     from 'react-i18next';
import { subscribe }     from 'react-contextual';
import { NavLink }       from 'react-router-dom';
import store             from '../../../../store/store.js';
import i18next           from '../../../../resources/utils/i18n.js';

import api               from '../../../../resources/utils/wretch.js';
import constants         from '../../../../resources/utils/constants.js';
import initialMenu       from '../../../../resources/utils/initialMenu.js';

import OnOutsideClick    from '../../OnOutsideClick/OnOutsideClick.jsx';

@translate(['common', 'menu'])
@subscribe(store, s => ({
    toggle : s.actions.toggleMenu,
    menu: s.menu
}))
class MainNavMenu extends React.Component {
    constructor(props){
        super(props);
        this.container = React.createRef();
    }

    render() {
        const { t } = this.props;

        return (
            <OnOutsideClick action={() => this.props.toggle()}
                            element={this.container}>
                <div className="main-nav_menu grid is-4-columns" ref={this.container}>
                    { this.props.menu.map(menuItem =>
                            <NavLink to={menuItem.link}
                                     className="main-nav_menu_item"
                                     activeClassName="active"
                                     onClick={this.props.toggle}>
                                <span className="main-nav_menu_item_title">
                                    {t(`menu:${menuItem.label}`)}
                                </span>
                            </NavLink>
                        )
                    }
                </div>
            </OnOutsideClick>

        )
    }
}

export default MainNavMenu
