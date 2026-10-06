import React from 'react'

const SavedInvoiceHeader = ({categoryWiseInvoiceTotals}) => {
  const { totalInvoices, draftInvoices, sentInvoices, paidInvoices } = categoryWiseInvoiceTotals || {};
  return (
    <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#334155]">Saved invoices</h2>
            <div className="flex gap-1 text-xs font-medium">
              <button className="cursor-pointer rounded bg-[#2563eb] px-3 py-1 text-white">All {totalInvoices}</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Draft {draftInvoices}</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Sent {sentInvoices}</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Paid {paidInvoices}</button>
            </div>
          </div>
  )
}

export default SavedInvoiceHeader
