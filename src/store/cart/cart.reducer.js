import { ADD_ITEM_TO_CART_ERROR, ADD_ITEM_TO_CART_LOADING, ADD_ITEM_TO_CART_SUCCESS, GET_CART_ITEMS_ERROR, GET_CART_ITEMS_LOADING, GET_CART_ITEMS_SUCCESS, REMOVE_CART_ITEMS_ERROR, REMOVE_CART_ITEMS_LOADING, REMOVE_CART_ITEMS_SUCCESS, UPDATE_CART_ITEMS_ERROR, UPDATE_CART_ITEMS_LOADING, UPDATE_CART_ITEMS_SUCCESS } from "./cart.types";

// Note: Do not update/change the initial state
const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {

  switch(type){
     case GET_CART_ITEMS_LOADING:{
      return{
        ...state,
        getCartItems:{
          ...state.getCartItems,
          loading: true,
          error: false,

        },
        
      }
     }
     case GET_CART_ITEMS_SUCCESS:{
      return{
        ...state,
        getCartItems:{
          ...state.getCartItems,
          loading: false,
          error: false,

        },
      data:payload
      }
     }
     case GET_CART_ITEMS_ERROR:{
      return{
        ...state,
        getCartItems:{
          ...state.getCartItems,
          loading: false,
          error: true,

        }
      }
     }
     case ADD_ITEM_TO_CART_LOADING:{
      return{
        ...state,
        addCartItem:{
          ...state.addCartItem,
          loading: true,
          error: false,
        }
      }
     }
     case ADD_ITEM_TO_CART_SUCCESS:{
      return{
        ...state,
        addCartItem:{
          ...state.addCartItem,
          loading: false,
          error: false,
        },
        data:[...state.data,payload]
      }
     }
     case ADD_ITEM_TO_CART_ERROR:{
      return{
        ...state,
        addCartItem:{
          ...state.addCartItem,
          loading: false,
          error: true,
        }
      }
     }
      
     case UPDATE_CART_ITEMS_LOADING:{
      return{
        ...state,
        updateCartItem:{
          ...state.updateCartItem,
          loading: true,
          error: false,

        }
      }
     }
     case UPDATE_CART_ITEMS_SUCCESS:{
      const newItems = state.data.map((cI) => {
        if (cI.id === payload.id) {

          return payload;
        } else return cI;
      });
      return { ...state, data:newItems, updateCartItem: { loading: false } };
    }
     
     case UPDATE_CART_ITEMS_ERROR:{
      return{
        ...state,
        updateCartItem:{
          ...state.updateCartItem,
          loading: false,
          error:true,

        }
      }
     }
     case REMOVE_CART_ITEMS_LOADING:{
      return{
        ...state,
        removeCartItem:{
          ...state.removeCartItem,
          loading: true,
          error: false,

        }
      }
     }
     case REMOVE_CART_ITEMS_SUCCESS:{
      
      const newItems = state.data.filter((cI) => cI.id !== payload.id);
      return { ...state, data: newItems, removeCartItem: { loading: false } };
    }
   
     
     case REMOVE_CART_ITEMS_ERROR:{
      return{
        ...state,
        removeCartItem:{
          ...state.removeCartItem,
          loading: false,
          error:true,

        }
      }
     }


    default:{
      return state
    }
  }
 
};
