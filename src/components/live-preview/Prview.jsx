import React from 'react'
import Header from './Header';
import Calculations from './Calculations';

const Preview = () => {
  return (
     <div className="flex flex-col gap-3 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-4 shadow-sm">
            <Header />

            <Calculations />

            <div className="grid grid-cols-2 gap-2">
              <button className="cursor-pointer rounded-lg bg-[#2563eb] py-2 text-sm font-semibold text-white hover:bg-[#1d4ed8]">
                💾 Save
              </button>
              <button className="cursor-pointer rounded-lg bg-[#0f766e] py-2 text-sm font-semibold text-white hover:bg-[#115e59]">
                📄 Duplicate
              </button>
            </div>
          </div>
  )
}

export default Preview
