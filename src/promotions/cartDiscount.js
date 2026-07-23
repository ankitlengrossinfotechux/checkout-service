function calculateDiscount(items, customerTier, coupon) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discount = 0;
  if (customerTier === 'gold') discount += subtotal * 0.15;
  else if (customerTier === 'silver') discount += subtotal * 0.10;
  if (coupon && coupon.active && subtotal >= coupon.minimumSpend) {
    discount += Math.min(coupon.amount, subtotal - discount);
  }
  return Math.max(0, Math.round(discount * 100) / 100);
}

module.exports = { calculateDiscount };
