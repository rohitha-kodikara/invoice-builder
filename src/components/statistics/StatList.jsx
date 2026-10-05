import React from 'react'

const StatList = () => {
  return (
    <section className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-[#bfdbfe] bg-[#eff6ff] px-4 py-3 text-[#1e40af]">
            <p className="text-xs text-[#3b82f6]">Total invoiced</p>
            <p className="text-2xl font-bold">$4,860</p>
          </div>
          <div className="rounded-xl border border-[#a7f3d0] bg-[#ecfdf5] px-4 py-3 text-[#047857]">
            <p className="text-xs text-[#10b981]">Paid</p>
            <p className="text-2xl font-bold">$2,300</p>
          </div>
          <div className="rounded-xl border border-[#fde68a] bg-[#fffbeb] px-4 py-3 text-[#b45309]">
            <p className="text-xs text-[#d97706]">Outstanding</p>
            <p className="text-2xl font-bold">$2,560</p>
          </div>
        </section>
  )
}

export default StatList
