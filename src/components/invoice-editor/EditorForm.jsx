import React from 'react'
import { X } from "lucide-react";
import PricingControls from './PricingControls';

const EditorForm = () => {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-[#334155]">Invoice details</h2>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                defaultValue="Acme Studio"
                aria-label="Client name"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
              <input
                type="text"
                defaultValue="INV-0007"
                aria-label="Invoice number"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
            </div>

            <h3 className="mt-1 text-sm font-semibold text-[#334155]">Line items</h3>

            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[1fr_52px_72px_20px] items-center gap-2">
                <input
                  type="text"
                  defaultValue="Logo design"
                  aria-label="Description"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="1"
                  aria-label="Quantity"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="800"
                  aria-label="Rate"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <button aria-label="Remove item" className="flex h-9 w-8  cursor-pointer items-center justify-center rounded-md bg-[#ea7a3d] text-white hover:bg-[#c2410c]">
                  <X size={18} />
                </button> 
              </div>

              <div className="grid grid-cols-[1fr_52px_72px_20px] items-center gap-2">
                <input
                  type="text"
                  defaultValue="Landing page"
                  aria-label="Description"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="2"
                  aria-label="Quantity"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="450"
                  aria-label="Rate"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <button aria-label="Remove item" className="flex h-9 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ea7a3d] text-white hover:bg-[#c2410c]">
                  <X size={18} />
                </button>
              </div>
            </div>

            <button className="w-full cursor-pointer rounded-lg bg-[#334155] py-2 text-sm font-semibold text-white hover:bg-[#1e293b]">
              + Add line item
            </button>

            <PricingControls />
          </div>
  )
}

export default EditorForm
