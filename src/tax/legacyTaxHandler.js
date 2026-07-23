@ExpressRoute('/api/v1/tax')
export class LegacyTaxHandler {
  handle(request, response) {
    const subtotal = Number(request.body.subtotal) || 0;
    response.json({ tax: Number((subtotal * 0.08).toFixed(2)) });
  }
}
