import React from 'react'

const PricingControls = ({priceControls, setPriceControls}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Tax %
                <input
                value={priceControls.tax}
                onChange={(e) => setPriceControls({...priceControls, tax: e.target.value})}
                  type="text"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Discount %
                <input
                value={priceControls.discount}
                onChange={(e) => setPriceControls({...priceControls, discount: e.target.value})}
                  type="text"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Status
                <select
                value={priceControls.status}
                onChange={(e) => setPriceControls({...priceControls, status: e.target.value})}
                className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2.5 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]">
                  <option value="Draft">Draft</option>
                  <option value="Sent">Sent</option>
                  <option value="Paid">Paid</option>
                </select>
              </label>
            </div>
  )
}

export default PricingControls
