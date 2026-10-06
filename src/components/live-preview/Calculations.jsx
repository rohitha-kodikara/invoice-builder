import React from 'react'
import { calculateInvoiceTotals } from "../../utils/invoiceCalculations";

const Calculations = ({ 
  InvoiceNumber,
  clientName,
  lineItems,
  priceControls,
}) => {
 const {
    visibleLineItems,
    subtotal,
    discountAmount,
    taxAmount,
    total,
  } = calculateInvoiceTotals(lineItems, priceControls);

 
    
        
  return (
    <div className="rounded-lg border border-[#dbeafe] bg-white p-4 text-[#334155]">
              <p className="font-bold text-[#2563eb]">{InvoiceNumber}</p>
              <p className="mb-3 text-sm">{clientName ? clientName : "" }</p>

              <div className="text-sm">
                {visibleLineItems.length > 0 ? (
                      visibleLineItems.map((item, index) => (
                        <div
                          key={item.id || index}
                          className="flex items-center justify-between border-b border-[#e2e8f0] py-1.5"
                        >
                          <span className="flex-1">{item.description}</span>

                          <span className="w-24 text-right text-xs">
                            {item.qty} × LKR. {Number(item.rate || 0).toFixed(2)}
                          </span>

                          <span className="w-16 text-right text-xs font-semibold">
                            LKR {(
                              Number(item.qty || 0) * Number(item.rate || 0)
                            ).toFixed(2)}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-[#64748b]">No line items</p>
                    )}
                {/* <div className="flex items-center justify-between border-b border-[#e2e8f0] py-1.5">
                  <span className="flex-1">Landing page</span>
                  <span className="w-24 text-right text-xs">2 × $450</span>
                  <span className="w-16 text-right text-xs font-semibold">$900</span>
                </div> */}

              </div>

              <div className="mt-3 flex flex-col gap-1 text-xs">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#be123c]">
                  <span>Discount ({Number(priceControls.discount || 0)}%)</span>
                  <span className="font-semibold">-{discountAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax ({Number(priceControls.tax || 0)}%)</span>
                  <span className="font-semibold">{
                   taxAmount.toFixed(2)
                  }</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-[#e2e8f0] pt-2 text-base font-bold text-[#047857]">
                  <span>Total</span>
                  <span>{ total.toFixed(2)}</span>
                </div>
              </div>
            </div>
  )
}

export default Calculations
