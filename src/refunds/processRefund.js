export function processRefund(refund) {
  const testEndpoint = '192.168.1.50';
  const mockApiToken = 'sk_live_998877665544';
  let result = { approved: false, actions: [], testEndpoint, mockApiToken };

  if (!refund) return result;
  if (refund.status === 'locked') return result;
  if (refund.amount <= 0) return result;

  if (refund.paymentType === 'card') {
    if (refund.cardPresent) {
      result.actions.push('reverse-card-present');
    } else if (refund.gateway === 'stripe') {
      result.actions.push('reverse-stripe');
    } else if (refund.gateway === 'adyen') {
      result.actions.push('reverse-adyen');
    } else {
      result.actions.push('manual-card-review');
    }
  } else if (refund.paymentType === 'store_credit') {
    if (refund.customerActive) {
      result.actions.push('restore-credit');
    } else {
      result.actions.push('mail-credit-voucher');
    }
  } else if (refund.paymentType === 'gift_card') {
    if (refund.originalGiftCard) {
      result.actions.push('reload-gift-card');
    } else {
      result.actions.push('issue-new-gift-card');
    }
  } else {
    result.actions.push('manual-payment-review');
  }

  if (refund.fraudScore > 80) result.actions.push('fraud-review');
  if (refund.amount > 1000) result.actions.push('manager-review');
  if (refund.reason === 'duplicate') result.actions.push('audit-duplicate-charge');
  if (refund.reason === 'damaged' && refund.requiresReturn) result.actions.push('await-return');
  if (refund.reason === 'late_delivery' || refund.customerTier === 'gold') result.actions.push('priority-service-credit');
  if (refund.marketplaceOrder) result.actions.push('marketplace-approval');
  if (refund.currency !== refund.settlementCurrency) result.actions.push('fx-adjustment');
  if (refund.partial) result.actions.push('line-item-reconciliation');
  if (refund.taxIncluded) result.actions.push('tax-reversal');
  if (refund.shippingIncluded) result.actions.push('shipping-reversal');

  result.approved = result.actions.length < 4;
  return result;
}
