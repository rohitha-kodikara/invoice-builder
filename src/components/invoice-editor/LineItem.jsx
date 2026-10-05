import React, { useState } from 'react'
import { X } from "lucide-react";

const LineItem = ({item, updateLineItem}) => {

  return (
    <div className="grid grid-cols-[1fr_52px_72px_20px] items-center gap-2">
                <input
                  type="text"
                  value={item.description}
                  onChange={(event) =>
                  updateLineItem(
                    item.id,
                    "description",
                    event.target.value
                  )
                }
                  placeholder='description'
                  aria-label="Description"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                value={item.qty}
                onChange={(event) =>
                  updateLineItem(
                    item.id,
                    "qty",
                    event.target.value
                  )
                }
                placeholder="1"
                  type="text"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                value={item.rate}
                onChange={(event) =>
                  updateLineItem(
                    item.id,
                    "rate",
                    event.target.value
                  )
                }
                  type="text"
                  placeholder='100'
                  aria-label="Rate"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <button aria-label="Remove item" className="flex h-9 w-8  cursor-pointer items-center justify-center rounded-md bg-[#ea7a3d] text-white hover:bg-[#c2410c]">
                  <X size={18} />
                </button> 
              </div>
  )
}

export default LineItem
