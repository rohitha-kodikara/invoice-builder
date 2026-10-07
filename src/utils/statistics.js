export const variantStyles = {
  total: {
    box: "border-[#cbd5e1] bg-[#f8fafc]",
    title: "text-slate-500",
    value: "text-slate-800",
  },

  paid: {
    box: "border-[#bbf7d0] bg-[#f0fdf4]",
    title: "text-slate-600",
    value: "text-green-600",
  },

  outstanding: {
    box: "border-[#fde68a] bg-[#fffbeb]",
    title: "text-[#d97706]",
    value: "text-[#f59e0b]",
  },
};

export const createStatItems = ({
  totalPriceOfAllInvoices,
  totalPaidInvoices,
  totalOutstandingInvoices,
}) => [
  {
    label: "Total Invoiced",
    value: totalPriceOfAllInvoices,
    variant: "total",
    prefix: "LKR. ",
  },
  {
    label: "Paid",
    value: totalPaidInvoices,
    variant: "paid",
    prefix: "LKR. ",
  },
  {
    label: "Outstanding",
    value: totalOutstandingInvoices,
    variant: "outstanding",
    prefix: "LKR. ",
  },
];