import React, { useState } from 'react'

import PricingControls from './PricingControls';
import LineItems from './LineItems';
import UserDetails from './UserDetails';





const EditorForm = ({
  handleSubmitInvoice, 
  clientName, 
  invoiceNumber, 
  setClientName, 
  setInvoiceNumber, 
  lineItems,
  setLineItems,
  priceControls,
  setPriceControls
}) => {

   const addLineItem = () => {
  const hasEmptyField = lineItems.some((item) =>
    [item.description, item.qty, item.rate].some(
      (value) => String(value).trim() === ""
    )
  );

  if (hasEmptyField) {
    alert("Please fill in all fields before adding a new line item.");
    return;
  }

  setLineItems((previousItems) => [
    ...previousItems,
    {
      id: crypto.randomUUID(),
      description: "",
      qty: "",
      rate: "",
    },
  ]);
};

  return (
     <form onSubmit={handleSubmitInvoice} className="flex flex-col gap-4">
    <div className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
           
            <h2 className="text-sm font-semibold text-[#334155]">Invoice details</h2>
            
           
            <UserDetails 
              clientName={clientName}
              invoiceNumber={invoiceNumber}
              setClientName={setClientName}
              setInvoiceNumber={setInvoiceNumber}
            />

            <h3 className="mt-1 text-sm font-semibold text-[#334155]">Line items</h3>
           
            <LineItems 
             lineItems={lineItems}
            setLineItems={setLineItems}
            />

            <button
              onClick={addLineItem}
              type="button"
             className="w-full cursor-pointer rounded-lg bg-[#334155] py-2 text-sm font-semibold text-white hover:bg-[#1e293b]">
              + Add line item
            </button>

            <PricingControls
             priceControls={priceControls}
             setPriceControls={setPriceControls}
             />

            
          </div>
          </form>
  )
}

export default EditorForm
