export default{
    toggleMenu : () => state => ({ menuDisplayed : !state.menuDisplayed }),
    addToMenu : menuItem => state => {
        let menu = state.menu.concat([menuItem]);
        return { menu }
    }
}
