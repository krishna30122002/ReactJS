import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          quantity: 1,
          img: "",
          id: 1,
        },
        {
          price: 99,
          title: "Watch",
          quantity: 5,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          quantity: 4,
          img: "",
          id: 3,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* {arr.map((item)=>{
                return item+5
            })} */}

        {products.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
}
export default Cart;
