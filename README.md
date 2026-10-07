
## 🧾 Invoice Builder: Project Explanation

<img width="1456" height="962" alt="image" src="https://github.com/user-attachments/assets/2db01d6b-dfac-4c96-80a5-0e8ca4f52a07" />


A React invoice builder where users create invoices, see a live preview, save them, and track totals. Built with React (hooks), Tailwind CSS, SweetAlert2, and Lucide icons.

### Tech Stack
- React (functional components and hooks)
- Tailwind CSS
- SweetAlert2 (confirmation and validation dialogs)

### 1. Features I Developed

- Invoice editor with client name and an auto-generated sequential invoice number (`INV-0001`, `INV-0002`, ...)
- Dynamic line items: add multiple rows (description, qty, rate) and remove rows
- Validation: a new line item row can't be added until the existing rows are fully filled
- Pricing controls: tax %, discount %, and invoice status (Draft / Sent / Paid)
- Live preview that updates instantly with subtotal, discount, tax, and final total
- Save invoice with a confirmation dialog and validation of required fields
- Form auto-resets after saving, and the next invoice number is generated
- Delete saved invoices with a confirmation prompt
- Statistics dashboard: Total Invoiced, Paid, and Outstanding amounts
- Saved invoices header showing counts by status (All / Draft / Sent / Paid)
- Clean, component-based structure with calculation and handler logic separated into `utils`

### 2. Challenges I Faced and How I Solved Them

**2.1 Generating a unique invoice ID after each save**
- *Problem:* I needed the next invoice number to be generated automatically after every save.
- *Solution:* I created a separate utility function, `invoiceIdGenerator`, which takes the previous ID and returns the next one. The invoice number is stored in a state variable, and its setter (`setInvoiceNumber`) is called inside `handleSubmitInvoice` after a successful save.

**2.2 Passing the saved-invoice totals as props**
- *Problem:* I was passing the summarized totals (total, draft, sent, paid) to the child component as separate props, one by one, which made the props messy.
- *Solution:* I grouped all the values into a single object, `categoryWiseInvoiceTotals`, and passed that one prop. The child destructures what it needs.

**2.3 Old values appearing in new line item rows**
- *Problem:* I first kept a separate state for each input field. When I filled a row and clicked "Add line item", the new row showed the previously typed values.
- *Solution:* I changed to a single state array of objects, where each line item is `{ id, description, qty, rate }`. Every new row is created as a fresh empty object with its own unique id (`crypto.randomUUID()`), so rows never share values.

**2.4 Handler Functions and Wrapper Functions**

In `App.jsx`, `handleSubmitInvoice` and `handleDeleteInvoice` are wrapper functions around the logic in `utils` (imported as `submitInvoice` / `deleteInvoice`).
- The real logic needs many arguments, such as state values and setters like `setSavedInvoices`.
- The wrapper passes those arguments from `App`, so child components receive a simple function.
- For example, the delete button only passes the `invoiceId`. The wrapper supplies `setSavedInvoices` itself.
- The imports are aliased to avoid name clashes with the wrapper names.
- This keeps the components clean and the logic reusable.
