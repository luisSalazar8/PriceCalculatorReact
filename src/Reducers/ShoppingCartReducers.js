import { priceCalculator } from "../Util/Price";

export const shoppingCartReducer = (
  shoppingCart = { items: [], quantity: 0 },
  action
) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const { product, quantity, total } = action.payload;
      const result = shoppingCart["items"].filter(
        (item) => item.name === product.name
      );
      if (result.length === 0) {
        shoppingCart["items"].push({
          ...product,
          total: total,
          quantity: quantity,
        });
      } else {
        const productInList = result[0];
        productInList.quantity = productInList.quantity + quantity;
        productInList.total = priceCalculator(product, productInList.quantity);
      }

      return {
        items: shoppingCart["items"],
        quantity: shoppingCart["quantity"] + quantity,
      };

    case "CLEAN_SHOPPING_CART":
      return { items: [], quantity: 0 };

    default:
      return shoppingCart;
  }
};
