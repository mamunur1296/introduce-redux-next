import { ADD_TO_CARD, REMOVE_FORM_CARD } from "../actionTypes/actionTypes";

const initialState = {
  card: [],
};

const productReducer = (state = initialState, action) => {
  const selectedProduct = state.card.find(
    (product) => product.id === action.payload.id
  );
  console.log(state.card);
  console.log(selectedProduct);
  switch (action.type) {
    case ADD_TO_CARD:
      if (selectedProduct) {
        const newCart = state.card.filter(
          (product) => product.id !== selectedProduct.id
        );
        selectedProduct.quantity = selectedProduct.quantity + 1;
        return {
          ...state,
          cart: [...newCart, selectedProduct],
        };
      } else {
        return {
          ...state,
          card: [...state.card, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FORM_CARD:
      console.log(selectedProduct.quantity);
      if (selectedProduct.quantity > 1) {
        selectedProduct.quantity = selectedProduct.quantity - 1;
        return {
          ...state,
          card: [...state.card],
        };
      } else {
        return {
          ...state,
          card: state.card.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      }
    default:
      return state;
  }
};
export default productReducer;
