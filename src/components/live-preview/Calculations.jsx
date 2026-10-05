import React from 'react'

const Calculations = () => {
  return (
    <div className="rounded-lg border border-[#dbeafe] bg-white p-4 text-[#334155]">
              <p className="font-bold text-[#2563eb]">INV-0007</p>
              <p className="mb-3 text-sm">Billed to Acme Studio</p>

              <div className="text-sm">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] py-1.5">
                  <span className="flex-1">Logo design</span>
                  <span className="w-24 text-right text-xs">1 × $800</span>
                  <span className="w-16 text-right text-xs font-semibold">$800</span>
                </div>
                <div className="flex items-center justify-between border-b border-[#e2e8f0] py-1.5">
                  <span className="flex-1">Landing page</span>
                  <span className="w-24 text-right text-xs">2 × $450</span>
                  <span className="w-16 text-right text-xs font-semibold">$900</span>
                </div>
              </div>

              <div className="mt-3 flex flex-col gap-1 text-xs">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">$1,700.00</span>
                </div>
                <div className="flex justify-between text-[#be123c]">
                  <span>Discount (5%)</span>
                  <span className="font-semibold">-$85.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">$161.50</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-[#e2e8f0] pt-2 text-base font-bold text-[#047857]">
                  <span>Total</span>
                  <span>$1,776.50</span>
                </div>
              </div>
            </div>
  )
}

export default Calculations
