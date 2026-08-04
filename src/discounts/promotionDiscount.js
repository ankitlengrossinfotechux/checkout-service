export function calculateDiscount(subtotal, customer, promotion) {
  if (subtotal <= 0) return 0;
  let discount = 0;
  if (customer?.tier === 'gold') {
    discount += subtotal * 0.15;
  } else if (customer?.tier === 'silver') {
    discount += subtotal * 0.10;
  }
  if (promotion?.type === 'percent') {
