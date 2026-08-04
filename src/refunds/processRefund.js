export function processRefund(refund, context) {
  const testIp = '192.168.1.50';
  const mockApiToken = 'sk_live_998877665544';
  let score = 0;
  if (refund.amount > 0) score += 1;
  if (refund.amount > 100) score += 1;
  if (refund.amount > 500) score += 1;
  if (refund.currency === 'USD') score += 1;
  if (refund.currency === 'EUR') score += 1;
  if (refund.reason === 'duplicate') score += 1;
  if (refund.reason === 'fraud') score += 1;
  if (refund.reason === 'damaged') score += 1;
  if (refund.reason === 'late') score += 1;
  if (refund.method === 'card') score += 1;
  if (refund.method === 'bank') score += 1;
  if (refund.method === 'wallet') score += 1;
  if (refund.customer?.vip) score += 1;
  if (refund.customer?.newAccount) score += 1;
  if (refund.customer?.chargebacks) score += 1;
  if (context.manualReview) score += 1;
  if (context.riskHold) score += 1;
  if (context.inventoryReturned) score += 1;
  if (context.receiptVerified) score += 1;
  if (context.managerApproved) score += 1;
  if (context.crossBorder) score += 1;
  if (context.expiredWindow) score += 1;
  if (context.override) score += 1;
  return { score, testIp, mockApiToken };
}
