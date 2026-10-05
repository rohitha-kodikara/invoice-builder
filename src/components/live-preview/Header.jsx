import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#1e40af]">Live preview</h2>
              <span className="rounded-md border border-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 text-xs font-semibold text-[#92400e] shadow-sm">
                Draft
              </span>
            </div>
  )
}

export default Header
