import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  getCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";


const Product = ({id,name,description}) => {
  const dispatch=useDispatch()
  const cart = useSelector((state) => {
    console.log(state.cart.data);
    return (
      state.cart.data.find((item) => item.productId === id) || { count: 0 }
    );
  });




  const handleAdd=()=>{
    dispatch(addItemToCart({
      productId:id,
      count:1
    }))
  }
  const handleupdate=(newcount)=>{
   
    if(newcount==0){
      dispatch(removeItemFromCart(cart.id))
    }
    else{
      dispatch(updateCartItem(
        cart.id,
     
          {count:newcount},
      ))
    }
  }

  
  


  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      
      {cart.count==0?(<button data-cy="product-add-item-to-cart-button" onClick={handleAdd}>Add-to-cart</button>):(
        <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>{handleupdate(cart.count + 1)
        dispatch(getCart())}}>+</button>
        <span data-cy="product-count">{cart.count}</span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{handleupdate(cart.count - 1)

        dispatch(getCart())
        
        
      }
      
      }>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>handleupdate(0)}>Remove</button>
      </div>
)}
    </div>
      
      
  );
};

export default Product;
