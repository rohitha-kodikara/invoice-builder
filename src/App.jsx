
import Logo from "./components/invoice-header/Logo";
import InvoiceResetter from "./components/invoice-header/InvoiceResetter";
import StatList from "./components/statistics/StatList";
import EditorForm from "./components/invoice-editor/EditorForm";
import Preview from "./components/live-preview/Prview";
import Header from "./components/live-preview/Header";
import ItemsTable from "./components/saved-invoices/ItemsTable";
import { useState } from "react";
import { invoiceIdGenerator } from './utils/InvoiceGenerator';

import { TriangleAlert } from "lucide-react";
import Swal from "sweetalert2";
import SavedInvoiceHeader from "./components/saved-invoices/SavedInvoiceHeader";

function App() {

//Editor form state
 const[clientName, setClientName] = useState("");
  const[invoiceNumber, setInvoiceNumber] = useState(invoiceIdGenerator());
    //LineItems states
  const [lineItems, setLineItems] = useState([
    {
      id: crypto.randomUUID(),
      description: "",
      qty: "",
      rate: "",
    },
]);

const[priceControls, setPriceControls] = useState({
  tax: 0,
  discount: 0,
  status: "draft",
});

const[savedInvoices, setSavedInvoices] = useState([]);




  //Editor form functions
  //  const generateNextInvoiceNumber = () => {
  //   setInvoiceNumber((previousInvoiceNumber) =>
  //     invoiceIdGenerator(previousInvoiceNumber)
  //   );
  // };

  function handleSubmitInvoice(){
  
    const newInvoice = {
      id:invoiceNumber,
      clientName: clientName,
      lineItems: lineItems,
      priceControls: priceControls,
    };
    
    if (!clientName || !priceControls.tax || !priceControls.discount || lineItems.length === 0) {
      Swal.fire("", "Please fill in all fields before saving the invoice.", "error");
      return;
    }else{
        //start of if condition
      Swal.fire({
        title: "Do you want to save the changes?",
        // showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        // denyButtonText: `Don't save`
      }).then((result) => {
        if (result.isConfirmed) {
          // Save the changes
            setSavedInvoices((previousInvoices) => [...previousInvoices, newInvoice]);
              setClientName("");
              setLineItems([
                {
              id: crypto.randomUUID(),
              description: "",
              qty: "",
              rate: "",
            }])
              setPriceControls({
                tax: 0,
                discount: 0,
                status: "draft",
              });
          setInvoiceNumber(invoiceIdGenerator(invoiceNumber));
          //save the changes
          Swal.fire("Saved!", "", "success")
        }
        else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
      });

      //end of if condition
    }

    
  }
 


  return (
    <div className="min-h-screen w-full bg-[#f1f5f9] p-6 text-[#0f172a]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        
        {/* Header */}
        <header className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-sm">
         <Logo />
          <InvoiceResetter />
        </header>

        {/* Stats */}
        <StatList />

        {/* Editor + Preview */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_1fr]">
          {/* Invoice details */}
          <EditorForm
            //user details
            clientName={clientName}
            invoiceNumber={invoiceNumber}
            setClientName={setClientName}
            setInvoiceNumber={setInvoiceNumber}
            //line items
            lineItems={lineItems}
            setLineItems={setLineItems}
            //submit invoice
            handleSubmitInvoice={handleSubmitInvoice}
            //price controls
            priceControls={priceControls}
            setPriceControls={setPriceControls}
          />

          {/* Live preview */}
        <Preview 
        handleSubmitInvoice={handleSubmitInvoice}

        //preview props
         invoiceNumber={invoiceNumber}
         clientName={clientName}
         lineItems={lineItems}
         priceControls={priceControls}
        />
        </section>

        {/* Saved invoices */}
        <section className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <SavedInvoiceHeader />
          <ItemsTable />
        </section>
      </div>
    </div>
  );
}

export default App;