import { Trash, X } from "lucide-react";
import Logo from "./components/invoice-header/Logo";
import InvoiceResetter from "./components/invoice-header/InvoiceResetter";


function App() {
  return (
    <div className="min-h-screen w-full bg-[#f1f5f9] p-6 text-[#0f172a]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        {/* Header */}
        <header className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-sm">
         <Logo />
          <InvoiceResetter />
        </header>

        {/* Stats */}
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

        {/* Editor + Preview */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_1fr]">
          {/* Invoice details */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
            <h2 className="text-sm font-semibold text-[#334155]">Invoice details</h2>

            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                defaultValue="Acme Studio"
                aria-label="Client name"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
              <input
                type="text"
                defaultValue="INV-0007"
                aria-label="Invoice number"
                className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
              />
            </div>

            <h3 className="mt-1 text-sm font-semibold text-[#334155]">Line items</h3>

            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-[1fr_52px_72px_20px] items-center gap-2">
                <input
                  type="text"
                  defaultValue="Logo design"
                  aria-label="Description"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="1"
                  aria-label="Quantity"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="800"
                  aria-label="Rate"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <button aria-label="Remove item" className="flex h-9 w-8  cursor-pointer items-center justify-center rounded-md bg-[#ea7a3d] text-white hover:bg-[#c2410c]">
                  <X size={18} />
                </button> 
              </div>

              <div className="grid grid-cols-[1fr_52px_72px_20px] items-center gap-2">
                <input
                  type="text"
                  defaultValue="Landing page"
                  aria-label="Description"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="2"
                  aria-label="Quantity"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <input
                  type="text"
                  defaultValue="450"
                  aria-label="Rate"
                  className="min-w-0 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
                <button aria-label="Remove item" className="flex h-9 w-8 cursor-pointer items-center justify-center rounded-md bg-[#ea7a3d] text-white hover:bg-[#c2410c]">
                  <X size={18} />
                </button>
              </div>
            </div>

            <button className="w-full cursor-pointer rounded-lg bg-[#334155] py-2 text-sm font-semibold text-white hover:bg-[#1e293b]">
              + Add line item
            </button>

            <div className="grid grid-cols-3 gap-2">
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Tax %
                <input
                  type="text"
                  defaultValue="10"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Discount %
                <input
                  type="text"
                  defaultValue="5"
                  className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]"
                />
              </label>
              <label className="flex flex-col gap-1 text-xs font-medium text-[#475569]">
                Status
                <select className="w-full rounded-lg border border-[#cbd5e1] bg-[#f8fafc] px-3 py-2.5 text-base text-[#0f172a] outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-[#bfdbfe]">
                  <option>Draft</option>
                  <option>Sent</option>
                  <option>Paid</option>
                </select>
              </label>
            </div>
          </div>

          {/* Live preview */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#bfdbfe] bg-[#eff6ff] p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-[#1e40af]">Live preview</h2>
              <span className="rounded-md border border-[#f59e0b] bg-[#fef3c7] px-2 py-0.5 text-xs font-semibold text-[#92400e] shadow-sm">
                Draft
              </span>
            </div>

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

            <div className="grid grid-cols-2 gap-2">
              <button className="cursor-pointer rounded-lg bg-[#2563eb] py-2 text-sm font-semibold text-white hover:bg-[#1d4ed8]">
                💾 Save
              </button>
              <button className="cursor-pointer rounded-lg bg-[#0f766e] py-2 text-sm font-semibold text-white hover:bg-[#115e59]">
                📄 Duplicate
              </button>
            </div>
          </div>
        </section>

        {/* Saved invoices */}
        <section className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[#334155]">Saved invoices</h2>
            <div className="flex gap-1 text-xs font-medium">
              <button className="cursor-pointer rounded bg-[#2563eb] px-3 py-1 text-white">All 4</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Draft 1</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Sent 1</button>
              <button className="cursor-pointer rounded px-3 py-1 text-[#475569] hover:bg-[#f1f5f9]">Paid 2</button>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#e2e8f0] py-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0006</span>
            <span className="flex-1">Nimbus Labs</span>
            <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-semibold text-white">Paid</span>
            <span className="w-16 text-right font-semibold">$1,500</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-t border-[#e2e8f0] py-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0005</span>
            <span className="flex-1">Orbit Cafe</span>
            <span className="rounded bg-[#3b82f6] px-2 py-0.5 text-xs font-semibold text-white">Sent</span>
            <span className="w-16 text-right font-semibold">$2,560</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>

          <div className="flex items-center gap-3 border-t border-[#e2e8f0] pt-2.5 text-sm text-[#334155]">
            <span className="w-20 font-bold">INV-0004</span>
            <span className="flex-1">Kite Media</span>
            <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-semibold text-white">Paid</span>
            <span className="w-16 text-right font-semibold">$800</span>
            <button aria-label="Delete invoice" className="cursor-pointer rounded-md bg-[#d62828] px-2 py-1 text-white hover:bg-[#7f1d1d]">
               <Trash size={16} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;