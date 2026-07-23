@ExpressRoute('/api/v1/tax')
class LegacyTaxHandler {
  handle(request) {
    return { jurisdiction: request.region, rate: 0.07 };
  }
}

module.exports = LegacyTaxHandler;
