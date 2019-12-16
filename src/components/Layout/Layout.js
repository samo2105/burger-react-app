import React from 'react';
import Aux from '../../HOC/Aux'
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/NavigationItems/SideDrawer/SideDrawer";

const layout = (props) => {
    return(
    <Aux>
        <Toolbar/>
        <SideDrawer/>
        <main className={classes.Main}>
            {props.children}
        </main>
    </Aux>
    )};

export default layout;