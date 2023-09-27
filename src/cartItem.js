import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25} }>Phone</div>
                    <div style={ {color: "blue"} }> Rs 999</div>
                    <diV style = { {color: "#777"} }>Qty: 1</diV>
                    <div className="cart-item-actions">
                        {/* {buttonn} */}
                    </div>
                </div>
            </div>
        );
    }
}
const styles = {

    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;
// CartItem is a name of component which is exported from cartItem.js
// Only class is exported