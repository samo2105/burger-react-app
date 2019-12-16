import React from "react";
import classes from './BuildControls.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p><strong>Total Price: ${props.burgerPrice.toFixed(2)}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                removeIngredient={() => props.ingredientRemoved(ctrl.type)}
                addIngredient={() => props.ingredientAdded(ctrl.type)}
                quantity={props.ingredients[ctrl.type]}
                price={props.ingredients[ctrl.type] * props.prices[ctrl.type]}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}> Order Now </button>
    </div>
);

export default buildControls;