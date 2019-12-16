import React from 'react';
import Aux from '../../HOC/Aux'
import classes from './Layout.css'

const layout = (props) => {
    return(
    <Aux>
        <div>toolbar, sidedrawer, backdrop</div>
        <main className={classes.Main}>
            {props.children}
        </main>
    </Aux>
    )};

export default layout;