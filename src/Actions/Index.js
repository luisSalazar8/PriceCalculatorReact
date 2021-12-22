export const selectProduct = product => {
    // Return an action
    return {
      type: 'PRODUCT_SELECTED',
      payload: product
    };
  };