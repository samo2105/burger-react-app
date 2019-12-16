import React from "react";
import classes from './SideDrawer.css'
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems";

const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer