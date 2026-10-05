import React from 'react'

const PricingControls = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Tax %
                <input
                  type="text"
                  defaultValue="10"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Discount %
                <input
                  type="text"
                  defaultValue="5"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Status
                <select className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2.5 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]">
                  <option>Draft</option>
                  <option>Sent</option>
                  <option>Paid</option>
                </select>
              </label>
            </div>
  )
}

export default PricingControls
