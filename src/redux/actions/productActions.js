import { ActionTypes } from "../constants/action-types";

export const addItem = (recipe) => {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: recipe,
  };
};

export const delItem = (recipe) => {
  return {
    type: ActionTypes.DEL_ITEM,
    payload: recipe,
  };
};