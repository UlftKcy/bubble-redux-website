import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
  CLEAN_CART,
} from "../actionTypes/types";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let newItem = {
          ...action.payload,
          cartQuantity: 1,
        };
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    case DECREASE_PRODUCT_FROM_CART:
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const lastCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = lastCartItems;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    case REMOVE_PRODUCT_FROM_CART:
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const lastCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = lastCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    case CLEAN_CART:
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    default:
      return state;
  }
};

export default cartReducers;

/*   export const addToCart = (state=initialState,action) => {
    const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
    if (existingIndex>=0) {
        state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity : state.cartItems[existingIndex].cartQuantity + 1
        };

    }else{
        let newItem = {
            ...action.payload,
            cartQuantity : 1
        };
        state.cartItems.push(newItem)
    }
    localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
}

export const removeFromCart */
