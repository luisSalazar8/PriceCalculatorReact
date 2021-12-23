export const selectProduct = (product) => {
  return {
    type: "PRODUCT_SELECTED",
    payload: product,
  };
};

export const showModalProductDetail = () => {
  return {
    type: "SHOW_MODAL_PRODUCT_DETAIL",
  };
};

export const closeModalProductDetail = () => {
  return {
    type: "CLOSE_MODAL_PRODUCT_DETAIL",
  };
};

export const addProductToCart = (product, quantity, total) => {
  const quantityInt = parseInt(quantity);
  return {
    type: "ADD_PRODUCT",
    payload: { product, quantity: quantityInt, total },
  };
};

export const cleanShoppingCart = () => {
  return {
    type: "CLEAN_SHOPPING_CART",
  };
};
