export default{
    toggleMenu : () => state => ({ menuDisplayed : !state.menuDisplayed }),
    openMenu : () => ({ menuDisplayed : true }),
    closeMenu : () => ({ menuDisplayed : false }),
    addToMenu : menuItem => state => {
        let menu = state.menu.concat([menuItem]);
        return { menu }
    }
}
