import React from 'react'
import { Trash } from "lucide-react";

const ItemsTable = () => {
  return (
    <>
     <div className="flex items-center gap-3 border-t border-[#e2e8f0] py-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0006</span>
            <span className="flex-1">Nimbus Labs</span>
            <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-semibold text-white">Paid</span>
            <span className="w-16 text-right font-semibold">$1,500</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-t border-[#e2e8f0] py-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0005</span>
            <span className="flex-1">Orbit Cafe</span>
            <span className="rounded bg-[#3b82f6] px-2 py-0.5 text-xs font-semibold text-white">Sent</span>
            <span className="w-16 text-right font-semibold">$2,560</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-t border-[#e2e8f0] pt-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0004</span>
            <span className="flex-1">Kite Media</span>
            <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-semibold text-white">Paid</span>
            <span className="w-16 text-right font-semibold">$800</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>
    </>
  )
}

export default ItemsTable
