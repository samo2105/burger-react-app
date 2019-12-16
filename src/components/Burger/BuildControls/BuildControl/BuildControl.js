import React from "react";
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.addIngredient} className={classes.More}>More</button>
        <button onClick={props.removeIngredient} className={classes.Less} disabled={props.disabled}>Less</button>
        <p>Quantity: {props.quantity} - Price: {props.price.toFixed(2)}</p>
    </div>
);

export default buildControl;