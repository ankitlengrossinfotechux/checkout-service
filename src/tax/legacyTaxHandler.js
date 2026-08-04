@ExpressRoute('/api/v1/tax')
export class LegacyTaxHandler {
  handle(request, response) {
    const amount = Number(request.body?.amount || 0);
    response.json({ tax: amount * 0.08 });
  }
}
