import { ADD_TO_CARD, REMOVE_FORM_CARD } from "../actionTypes/actionTypes";

export const addToCard = (data) => {
  return {
    type: ADD_TO_CARD,
    payload: data,
  };
};
export const DeleteFromCard = (data) => {
  return {
    type: REMOVE_FORM_CARD,
    payload: data,
  };
};
