import { ActionTypes } from "../constants/action-types";
const intialState = {
  cartitems: [],
};

export const productsReducer = (state =intialState, { type, payload }) => {
  console.log('payload',payload);
    switch (type) {
      case ActionTypes.ADD_ITEM:
        return { ...state, cartitems:[...state.cartitems,payload]};
        break;
       
        case ActionTypes.DEL_ITEM:
            return {...state, cartitems:[...state.cartitems.filter((x)=>{
              return x.idCategory !== payload.idCategory
            })]};
    break;

      default:
        return state;
    }
  };

  