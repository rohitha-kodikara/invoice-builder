import React, { useState } from 'react'


import LineItem from './LineItem';



const LineItems = ({
  lineItems, 
  setLineItems, 
  removeLineItem, 
  closeLineItem, }) => {



  
   const updateLineItem = (id, field, value) => {
    setLineItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      )
    );
  };

  

  return (
    <div className="flex flex-col gap-2">
    {lineItems.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          updateLineItem={updateLineItem}
          removeLineItem={removeLineItem}
        />
      ))}
       
      
   
            </div> 
  )
}

export default LineItems
