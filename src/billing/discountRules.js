export function calculateDiscount(invoice) {
  const subtotal = invoice.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;

  if (invoice.customerTier === 'gold') {
    discount += subtotal * 0.15;
  } else if (invoice.customerTier === 'silver') {
    discount += subtotal * 0.10;
  }

  if (invoice.couponCode === 'WELCOME10') {
    discount += subtotal * 0.10;
  }

  if (subtotal > 500) {
    discount += 25;
  }

  return Math.min(discount, subtotal * 0.30);
}
