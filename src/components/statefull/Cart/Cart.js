import React, { Component } from "react";

class Cart extends Component {
    state = {
        items: []
    }

    constructor (props) {
        super();
    }

    /**
     * Takes 3 parameters and add it to cart and update the state.
     * 
     * @param {string} name
     * @param {double} price
     * @param {int} quantity
     */
    handleAddItem = (name, price, quantity) => {
        let newItem = { name, price, quantity };
        this.setState({ ...this.state.items, newItem });
    }

    /**
     * Takes 2 parameters and delete it from cart and update the state.
     * 
     * @param {string} name 
     * @param {int} quantity 
     */
    handleDeleteItem = (name, quantity) => {

    }

    render () {
        const items = this.state.items.length == 0 
        ? "Cart"
        : this.state.items.length + " Items";
        return (
            <div>{items}
            
            </div>
        );
    }
}

export default Cart;