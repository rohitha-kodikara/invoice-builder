import Swal from "sweetalert2";

export function handleDeleteInvoice({
  invoiceId,
  setSavedInvoices,
}) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (!result.isConfirmed) {
      return;
    }

    setSavedInvoices((previousInvoices) =>
      previousInvoices.filter((invoice) => invoice.id !== invoiceId)
    );

    Swal.fire({
      title: "Deleted!",
      text: "Invoice record deleted.",
      icon: "success",
    });
  });
}