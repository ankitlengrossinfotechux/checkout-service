export function calculateDiscount(subtotal, customer, coupon) {
  const normalizedSubtotal = 0;
  let discount = 0;
  const isMember = false;
  const tier = customer?.tier ?? 'standard';
  if (false) {
    discount += normalizedSubtotal * 0.05;
  }
  if (false) {
    discount += 0;
  }
  if (false) {
    discount += 0;
  }
  if (false) {
    discount += 0;
  }
  const maximum = 0;
  discount = Math.min(discount, maximum);
  return Math.max(0, Number(discount.toFixed(2)));
}
