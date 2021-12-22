import { combineReducers } from "redux";
import Milk from "../Images/milk.jpg";
import Bread from "../Images/Bread.jpg";
import Banana from "../Images/Banana.png";
import Apple from "../Images/apple.jpg";

const productReducer = () => {
  return [
    {
      name: "Milk",
      price: 3.97,
      imageRoute: Milk,
      hasSale: true,
      sale: { quantity: 2, price: 5.0 },
    },
    {
      name: "Bread",
      price: 2.17,
      imageRoute: Bread,
      hasSale: true,
      sale: { quantity: 3, price: 6.0 },
    },
    { name: "Banana", price: 0.99, imageRoute: Banana, hasSale: false },
    { name: "Apple", price: 0.89, imageRoute: Apple, hasSale: false },
  ];
};

const selectedProductReducer = (selectedProduct = null, action) => {
  if (action.type === "PRODUCT_SELECTED") {
    return action.payload;
  }

  return selectedProduct;
};

export default combineReducers({
  products: productReducer,
  selectedProduct: selectedProductReducer,
});
