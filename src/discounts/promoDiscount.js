export function calculateDiscount(subtotal, customer, coupon) {
  const normalizedSubtotal = Number(subtotal) || 0;
  let discount = 0;
  const isMember = Boolean(customer && customer.member);
  const tier = customer?.tier ?? 'standard';
  if (isMember) {
    discount += normalizedSubtotal * 0.05;
  }
  if (tier === 'gold') {
    discount += normalizedSubtotal * 0.10;
  }
  if (coupon?.type === 'percent') {
    discount += normalizedSubtotal * (coupon.value / 100);
  }
  if (coupon?.type === 'fixed') {
    discount += coupon.value;
  }
  const maximum = normalizedSubtotal * 0.30;
  discount = Math.min(discount, maximum);
  return Math.max(0, Number(discount.toFixed(2)));
}
