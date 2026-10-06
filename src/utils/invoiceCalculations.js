export function calculateInvoiceTotals(lineItems, priceControls) {
  const visibleLineItems = lineItems.filter(
    (item) =>
      String(item.description || "").trim() ||
      String(item.qty || "").trim() ||
      String(item.rate || "").trim()
  );

  const subtotal = visibleLineItems.reduce((total, item) => {
    return total + Number(item.qty || 0) * Number(item.rate || 0);
  }, 0);

  const discountAmount =
    subtotal * (Number(priceControls.discount || 0) / 100);

  const taxAmount =
    subtotal * (Number(priceControls.tax || 0) / 100);

  const total = subtotal + taxAmount - discountAmount;

  return {
    visibleLineItems,
    subtotal: Number(subtotal.toFixed(2)),
    discountAmount: Number(discountAmount.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}