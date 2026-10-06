import React from 'react'
import { Trash } from "lucide-react";

const ItemsTable = ({ savedInvoices, handleDeleteInvoice }) => {
  
  return (
    <>
      {
        savedInvoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center gap-3 border-t border-[#e2e8f0] pt-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">{invoice.id}</span>
            <span className="flex-1">{invoice.clientName}</span>
            <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-semibold text-white">{invoice.priceControls.status}</span>
            <span className="w-16 text-right font-semibold">LKR. {invoice.invoiceTotal.toFixed(2)}</span>
            <button
            onClick={()=>handleDeleteInvoice(invoice.id)}
            aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>
        )
        )
      }
         
    </>
  )
}

export default ItemsTable
