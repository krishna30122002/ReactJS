/* eslint-disable jsx-a11y/alt-text */
import React from "react";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      quantity: 1,
      img: "",
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  increaseQuantity=()=>{
    console.log('test')
  }

  render() {
    const { price, title, quantity } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs. {price}</div>
          <div style={{ color: "#777" }}>Quantity: {quantity}</div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={this.increaseQuantity.bind(this.state)}
            />
            <img
              alt="decrese"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
            />
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
    borderRadius: 4,
    backgroundColor: "gray",
  },
};
export default CartItem;
