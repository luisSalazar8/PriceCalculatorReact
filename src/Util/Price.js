export const priceCalculator = (selectedProduct, quantity) => {
  let total = 0;
  if (selectedProduct.hasSale) {
    const saleQuantity = selectedProduct.sale.quantity;
    const salePrice = selectedProduct.sale.price;
    const residue = quantity % saleQuantity;
    total =
      residue * selectedProduct.price +
      ((quantity - residue) / saleQuantity) * salePrice;
  } else {
    total = selectedProduct.price * quantity;
  }
  return total;
};
