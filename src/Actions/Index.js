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
