// Cart Actions here
import axios from "axios"
import { GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS, UPDATE_CART_ITEMS_ERROR, UPDATE_CART_ITEMS_LOADING, UPDATE_CART_ITEMS_SUCCESS } from "./cart.types"

export const getCart=()=>(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    axios.get("http://localhost:8080/cartItems").then(r=>{
        dispatch({type:GET_CART_ITEMS_SUCCESS,paylaod:r.data})
  
    }).catch(()=>{
        dispatch({type:GET_CART_ITEMS_ERROR})
    })

}


export const  addItemToCart=(data)=>(dispatch)=>{
    dispatch({type:GET_CART_ITEMS_LOADING})
    axios.post("http://localhost:8080/cartItems",{...data}

    ).then(({data})=>{
        dispatch({type:GET_CART_ITEMS_SUCCESS,payload:data})
    }).catch(()=>{
        dispatch({type:GET_CART_ITEMS_ERROR})
    })

}
export const   updateCartItem=({id,update})=>(dispatch)=>{
    dispatch({type:UPDATE_CART_ITEMS_LOADING})
    axios.patch(`http://localhost:8080/cartItems/${id}`,{...update}).then(({r})=>{
        dispatch({type:UPDATE_CART_ITEMS_SUCCESS,payload:r})
     
    }).catch(()=>{
        dispatch({type:UPDATE_CART_ITEMS_ERROR})
    })
}
export const  removeItemFromCart=(id)=>(dispatch)=>{
    dispatch({type:REMOVE_CART_ITEMS_LOADING})
    axios.delete(`http://localhost:8080/cartItems/${id}`).then(r=>{
        dispatch({type:REMOVE_CART_ITEMS_SUCCESS,payload:{id:id}})
    }).catch(()=>{
        dispatch({type:REMOVE_CART_ITEMS_ERROR})
    })
}