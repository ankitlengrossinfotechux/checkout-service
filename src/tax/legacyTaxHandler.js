export function legacyTaxHandler(order) {
  const taxableSubtotal = order.items
    .filter((item) => item.taxable)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (order.region === 'EU') {
    return taxableSubtotal * 0.20;
  }

  if (order.region === 'CA') {
    return taxableSubtotal * 0.13;
  }

  return taxableSubtotal * 0.08;
}
