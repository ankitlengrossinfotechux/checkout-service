export function calculateDiscount(subtotal, customerTier, couponPercent) {
  const tierRates = { bronze: 0.02, silver: 0.05, gold: 0.1 };
  const tierRate = tierRates[customerTier] || 0;
  const couponRate = Math.max(0, Math.min(couponPercent || 0, 30)) / 100;
  const combinedRate = Math.min(tierRate + couponRate, 0.35);
  return Math.round(subtotal * combinedRate * 100) / 100;
}
