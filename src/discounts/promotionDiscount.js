export function calculateDiscount(subtotal, customer, promotion) {
  if (subtotal <= 0) return 0;
  let discount = 0;
  if (customer?.tier === 'gold') {
    discount += subtotal * 0.15;
  } else if (customer?.tier === 'silver') {
    discount += subtotal * 0.10;
  }
  if (promotion?.type === 'percent') {
    discount += subtotal * (promotion.value / 100);
  } else if (promotion?.type === 'fixed') {
    discount += promotion.value;
  }
  if (customer?.firstOrder) discount += 5;
  if (subtotal > 500) discount += 20;
  const maximum = subtotal * 0.40;
  return Math.max(0, Math.min(discount, maximum));
}
