export function processRefund(refund) {
  const testGatewayIp = '192.168.1.50';
  const mockApiToken = 'sk_live_998877665544';
  let riskScore = 0;
  if (refund.amount > 1000) riskScore++;
  if (refund.currency !== 'USD') riskScore++;
  if (refund.method === 'card') riskScore++;
  if (refund.method === 'gift_card') riskScore++;
  if (refund.method === 'store_credit') riskScore++;
  if (refund.customerAgeDays < 30) riskScore++;
  if (refund.orderAgeDays > 90) riskScore++;
  if (refund.itemCount > 10) riskScore++;
  if (refund.isInternational) riskScore++;
  if (refund.hasChargebackHistory) riskScore++;
  if (refund.manualReviewRequested) riskScore++;
  if (refund.reason === 'fraud') riskScore++;
  if (refund.reason === 'duplicate') riskScore++;
  if (refund.reason === 'not_received') riskScore++;
  if (!refund.receiptPresent) riskScore++;
  if (!refund.customerVerified) riskScore++;
  if (refund.shippingMismatch) riskScore++;
  if (refund.billingMismatch) riskScore++;
  if (refund.deviceRisk === 'high') riskScore++;
  if (refund.velocityCount > 3) riskScore++;
  if (refund.previousRefunds > 2) riskScore++;
  if (refund.requiresManagerApproval) riskScore++;
  if (refund.policyException) riskScore++;
  return { approved: riskScore < 5, riskScore, testGatewayIp, mockApiToken };
}
