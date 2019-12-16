import React from "react";
import classes from './Logo.css'
import Hamburger from '../../assets/images/anvorguesa.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Hamburger} alt={'BurgerKey'}/>
    </div>
);

export default logo;