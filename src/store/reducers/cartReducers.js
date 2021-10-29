import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ADD_PRODUCT_TO_CART,
  DECREASE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART,
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
          cartAmount:
            state.cartItems[existingIndex].cartAmount +
            1 * action.payload.price,
        };
        toast.success("Increased product quantity", {
          position: "bottom-right",
        });
      } else {
        let newItem = {
          ...action.payload,
          cartQuantity: 1,
          cartAmount: 1 * action.payload.price,
        };
        state.cartItems.push(newItem);
        toast.success("Product added to cart", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {
        ...state,
        cartTotalQuantity: state.cartTotalQuantity + 1,
        cartTotalAmount: state.cartTotalAmount + 1 * action.payload.price,
      };

    case DECREASE_PRODUCT_FROM_CART:
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity - 1,
          cartAmount:
            state.cartItems[itemIndex].cartAmount - 1 * action.payload.price,
        };
        toast.error("Decreased product quantity", {
          position: "bottom-right",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const lastCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = lastCartItems;
        toast.error("Product removed from cart", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {
        ...state,
        cartTotalQuantity: state.cartTotalQuantity - 1,
        cartTotalAmount: state.cartTotalAmount - 1 * action.payload.price,
      };

    case REMOVE_PRODUCT_FROM_CART:
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const lastCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = lastCartItems;
          toast.error("Product removed from cart", {
            position: "bottom-right",
          });
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {
        ...state,
        cartTotalQuantity:
          state.cartTotalQuantity - action.payload.cartQuantity,
        cartTotalAmount:
          state.cartTotalAmount -
          action.payload.cartQuantity * action.payload.price,
      };
    default:
      return state;
  }
};

export default cartReducers;
