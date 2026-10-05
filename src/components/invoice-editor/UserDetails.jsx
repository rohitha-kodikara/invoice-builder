import React from 'react'

const UserDetails = ({clientName, setClientName, invoiceNumber, setInvoiceNumber}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
              <input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                type="text"
                placeholder="Client name"
                aria-label="Client name"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
              <input
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                disabled
                type="text"
                aria-label="Invoice number"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
            </div>
  )
}

export default UserDetails
