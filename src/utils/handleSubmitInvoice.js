import Swal from "sweetalert2";
import { calculateInvoiceTotals } from "./invoiceCalculations";
import { invoiceIdGenerator } from "./InvoiceGenerator";

export function handleSubmitInvoice({
  clientName,
  lineItems,
  priceControls,
  invoiceNumber,
  setSavedInvoices,
  setClientName,
  setLineItems,
  setPriceControls,
  setInvoiceNumber,
}) {
  if (
    !clientName ||
    !priceControls.tax ||
    !priceControls.discount ||
    lineItems.length === 0
  ) {
    Swal.fire(
      "",
      "Please fill in all fields before saving the invoice.",
      "error"
    );

    return;
  }

  Swal.fire({
    title: "Do you want to save the changes?",
    showCancelButton: true,
    confirmButtonText: "Save",
  }).then((result) => {
    if (!result.isConfirmed) {
      return;
    }

    const { total } = calculateInvoiceTotals(lineItems, priceControls);

    setInvoiceNumber(invoiceIdGenerator(invoiceNumber));
    const newInvoice = {
      id: invoiceNumber,
      clientName,
      lineItems,
      priceControls,
      invoiceTotal: total,
    };

    setSavedInvoices((previousInvoices) => [
      ...previousInvoices,
      newInvoice,
    ]);

    setClientName("");

    setLineItems([
      {
        id: crypto.randomUUID(),
        description: "",
        qty: "",
        rate: "",
      },
    ]);

    setPriceControls({
      tax: 1,
      discount: 1,
      status: "draft",
    });


    Swal.fire("Saved!", "", "success");
  });
}