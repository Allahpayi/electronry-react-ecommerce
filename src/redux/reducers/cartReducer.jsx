import { ActionTypes } from "../constants/action-types";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      let addedItem = state.items.find(
        (cartItem) => cartItem.product.id === payload.product.id
      );
      let totalPrice = state.items
        .map((item) => item.total)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );
      if (addedItem) {
        let newState = state.items.map((cartItem) => {
          if (cartItem.product.id === payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + Number(payload.quantity),
              total: addedItem.total + payload.total,
              size: addedItem.size,
              color: addedItem.color,
            });
          }
          return cartItem;
        });
        return { items: newState, totalPrice };
      } else {
        return {
          items: [...state.items, { ...payload }],
          totalPrice,
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      let totalPrice2 = state.items
        .filter((cartItem) => cartItem.product.id !== payload)
        .map((item) => item.total)
        .reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );
      const newState2 = state.items.filter(
        (cartItem) => cartItem.product.id !== payload
      );
      return { items: newState2, totalPrice: totalPrice2 };
    default:
      return state;
  }
};
