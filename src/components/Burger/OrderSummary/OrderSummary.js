import React, { Component } from "react";

import ReactAux from "../../../hoc/ReactAux/ReactAux.js";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log("Order Summary Will Updated");
        
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>  : {this.props.ingredients[igKey]}
                    </li>);
            })

        return (
            <ReactAux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Chekcout ?</p>
                <Button buttonType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button buttonType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </ReactAux>
        )
    }
}


export default OrderSummary;