import React from 'react'

const Header = () => {
  return (
    <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#334155]">Saved invoices</h2>
            <div className="flex gap-1 text-xs font-medium">
              <button className="cursor-pointer rounded bg-[#2563eb] px-3 py-1 text-white">All 4</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Draft 1</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Sent 1</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Paid 2</button>
            </div>
          </div>
  )
}

export default Header
