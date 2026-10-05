
import Logo from "./components/invoice-header/Logo";
import InvoiceResetter from "./components/invoice-header/InvoiceResetter";
import StatList from "./components/statistics/StatList";
import EditorForm from "./components/invoice-editor/EditorForm";
import Preview from "./components/live-preview/Prview";
import Header from "./components/live-preview/Header";
import ItemsTable from "./components/saved-invoices/ItemsTable";
import { useState } from "react";
import { invoiceIdGenerator } from './utils/InvoiceGenerator';


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


  //Editor form functions
   const generateNextInvoiceNumber = () => {
    setInvoiceNumber((previousInvoiceNumber) =>
      invoiceIdGenerator(previousInvoiceNumber)
    );
  };

  // function handleSaveInvoice() {

  //   const newLineItem ={
  //     description: description,
  //     qty: qty,
  //     rate: rate
  //   }
  //   return setLineItems((prevLineItems) => [...prevLineItems, newLineItem]);
  // }

  console.log(lineItems);


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
            clientName={clientName}
            invoiceNumber={invoiceNumber}
            setClientName={setClientName}
            setInvoiceNumber={setInvoiceNumber}

            lineItems={lineItems}
            setLineItems={setLineItems}
          />

          {/* Live preview */}
        <Preview 
        generateNextInvoiceNumber={generateNextInvoiceNumber}
        invoiceNumber={invoiceNumber}
        lineItems={lineItems}
        />
        </section>

        {/* Saved invoices */}
        <section className="rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm">
          <Header />
          <ItemsTable />
        </section>
      </div>
    </div>
  );
}

export default App;