/* eslint-disable jsx-a11y/alt-text */
import React from "react";
class CartItem extends React.Component {

  // testing(){
  //   const promise=new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve('done')
  //     },5000)
  //   })
  //   promise.then(()=>{
  //     this.setState({quantity:this.state.quantity+10})
  //     console.log('state',this.state);
  //   })
  // }

  // increaseQuantity=()=>{
  //   // this.setState({
  //   //   quantity:this.state.quantity+1
  //   // })
  //   this.setState((prevState)=>{
  //     return{
  //       quantity:prevState.quantity+1
  //     }
  //   },()=>{
  //     console.log(this.state)
  //   })
  // }
  
  // decreaseQuantity=()=>{
  //   this.setState((prevState)=>{
  //     return{
  //       quantity: prevState.quantity > 0 ? prevState.quantity - 1 : prevState.quantity
  //     }
  //   })
  // }


  render() {
    const { price, title, quantity } = this.props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props
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
              onClick={()=>onIncreaseQuantity(product)}
            />
            <img
              alt="decrese"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={()=>onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
              onClick={()=>onDeleteProduct(product.id)}
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
