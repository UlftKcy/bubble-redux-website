import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          cartAmount : state.cartItems[existingIndex].cartAmount + parseFloat(( 1 * action.payload.price).toFixed(2))
        };
        toast.success("Increased product quantity", {
          position: "bottom-right",
        });
      } else {
        let newItem = {
          ...action.payload,
          cartQuantity: 1,
          cartAmount : parseFloat(( 1 * action.payload.price).toFixed(2))
        };
        state.cartItems.push(newItem);
        toast.success("Product added to cart", {
          position: "bottom-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return state;

    case DECREASE_PRODUCT_FROM_CART:
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex] = {
          ...state.cartItems[itemIndex],
          cartQuantity: state.cartItems[itemIndex].cartQuantity - 1,
          cartAmount : state.cartItems[itemIndex].cartAmount - parseFloat(( 1 * action.payload.price).toFixed(2))
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
      return state;

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
      return state;

    case CLEAN_CART:
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-right" });
      return state;
    default:
      return state;
  }
};

export default cartReducers;
