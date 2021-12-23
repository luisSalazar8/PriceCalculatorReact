import { combineReducers } from "redux";

import {
  productReducer,
  selectedProductReducer,
  showModalProductDetailReducer,
} from "./ProductReducers";
import { shoppingCartReducer } from "./ShoppingCartReducers";

export default combineReducers({
  products: productReducer,
  selectedProduct: selectedProductReducer,
  showModalProductDetail: showModalProductDetailReducer,
  shoppingCart: shoppingCartReducer,
});
