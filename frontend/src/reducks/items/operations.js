import API from "../../API";
import { fetchItemsAction } from "./actions";

const api = new API();

export const fetchItems = (params) => {
  return (dispatch) => {
    return api
      .getItems(params)
      .then((items) => {
        dispatch(fetchItemsAction(items));
      })
      .catch((error) => {
        alert("Failed to connect API");
      });
  };
};
