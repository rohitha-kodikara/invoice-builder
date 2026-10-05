export function invoiceIdGenerator(previousInvoiceId = "INV-0000") {
  const match = /^INV-(\d+)$/.exec(previousInvoiceId);

  if (!match) {
    throw new Error(`Invalid invoice ID: ${previousInvoiceId}`);
  }

  const nextNumber = Number(match[1]) + 1;

  return `INV-${String(nextNumber).padStart(4, "0")}`;
}