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
  handleIncreaseQuantity = (product) => {
    console.log("Hey there, Increase quantity");
    const {products}=this.state;
    const index=products.indexOf(product);

    products[index].quantity+=1;
    this.setState({
        products:products
    })
  };

  handleDecreaseQuantity = (product) => {
    console.log("Hey there, Decrease quantity");
    const {products}=this.state;
    const index=products.indexOf(product);

    if(products[index].quantity===0){
        return;
    }

    products[index].quantity-=1;
    this.setState({
        products:products
    })
  };

  handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id)
    this.setState({
        products:items
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {/* {arr.map((item)=>{
                return item+5
            })} */}

        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
