
import Logo from "./components/invoice-header/Logo";
import StatList from "./components/statistics/StatList";
import EditorForm from "./components/invoice-editor/EditorForm";
import Preview from "./components/live-preview/Prview";
import ItemsTable from "./components/saved-invoices/ItemsTable";
import { useState } from "react";
import { invoiceIdGenerator } from './utils/InvoiceGenerator';
import {
  createStatItems,
  variantStyles,
} from "./utils/statistics";
import { handleSubmitInvoice as submitInvoice } from "./utils/handleSubmitInvoice";
import { handleDeleteInvoice as deleteInvoice } from "./utils/handleDeleteInvoice";
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
  tax: 1,
  discount: 1,
  status: "draft",
});

const[savedInvoices, setSavedInvoices] = useState([]);

//saved invoices category wise totals
const totalInvoices = savedInvoices.length;
const draftInvoices = savedInvoices.filter(invoice => invoice.priceControls.status === "draft").length;
const sentInvoices = savedInvoices.filter(invoice => invoice.priceControls.status === "sent").length;
const paidInvoices = savedInvoices.filter(invoice => invoice.priceControls.status === "paid").length;

const categoryWiseInvoiceTotals ={
  totalInvoices,
   draftInvoices,
   sentInvoices,
  paidInvoices,
}


function handleSubmitInvoice() {
  submitInvoice({
    clientName,
    lineItems,
    priceControls,
    invoiceNumber,
    setSavedInvoices,
    setClientName,
    setLineItems,
    setPriceControls,
    setInvoiceNumber,
  });
}


function handleDeleteInvoice(invoiceId) {
  deleteInvoice({
    invoiceId,
    setSavedInvoices,
  });

}

 

  //statistics calculations
  const totalPriceOfAllInvoices = savedInvoices.reduce((accumulator, invoice) => accumulator + invoice.invoiceTotal, 0);
  const totalPaidInvoices = savedInvoices.filter(invoice => invoice.priceControls.status === "paid").reduce((accumulator, invoice) => accumulator + invoice.invoiceTotal, 0);
  const totalOutstandingInvoices = totalPriceOfAllInvoices - totalPaidInvoices;
  
  //pass statistics to StatList component
  const statItems = createStatItems({
  totalPriceOfAllInvoices,
  totalPaidInvoices,
  totalOutstandingInvoices,
});


function removeLineItem(lineItemId){
  setLineItems((prevLineItems) => prevLineItems.filter((item) => item.id !== lineItemId));

}
console.log(lineItems)
 

  return (
    <div className="min-h-screen w-full bg-[#f1f5f9] p-6 text-[#0f172a]">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        
        {/* Header */}
        <header className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-white px-4 py-3 shadow-sm">
         <Logo />
       
        </header>

        {/* Stats */}
        <StatList 
         statItems={statItems}
          variantStyles={variantStyles}
        />

        {/* Editor + Preview */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_1fr]">
          {/* Invoice details */}
          <EditorForm
          //submit invoice 
           handleSubmitInvoice={handleSubmitInvoice}
            //user details
            clientName={clientName}
            invoiceNumber={invoiceNumber}
            setClientName={setClientName}
            setInvoiceNumber={setInvoiceNumber}
            //line items
            lineItems={lineItems}
            setLineItems={setLineItems}
 
            //remove line item
            removeLineItem={removeLineItem}


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

         //total
        />
        </section>

        {/* Saved invoices */}
        <section className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <SavedInvoiceHeader categoryWiseInvoiceTotals={categoryWiseInvoiceTotals} />
          <ItemsTable savedInvoices={savedInvoices} handleDeleteInvoice={handleDeleteInvoice} />
        </section>
      </div>
    </div>
  );
}

export default App;