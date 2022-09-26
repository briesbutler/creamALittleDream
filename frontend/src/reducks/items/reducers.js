import * as Actions from "./actions";
import initialState from "../store/initialState.js";

export const ItemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case Actions.FETCH_ITEM:
      return {
        ...state,
        ...action.payload.items,
        results: [...state.results, ...action.payload.items.results],
      };
    default:
      return state;
  }
};
