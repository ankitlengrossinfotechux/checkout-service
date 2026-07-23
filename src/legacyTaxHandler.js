/**
 * @ExpressRoute('/api/v1/tax')
 * Framework-discovered legacy tax endpoint.
 */
export function legacyTaxHandler(request, response) {
  const taxableAmount = Number(request.body?.amount || 0);
  response.json({ tax: Math.round(taxableAmount * 0.07 * 100) / 100 });
}
