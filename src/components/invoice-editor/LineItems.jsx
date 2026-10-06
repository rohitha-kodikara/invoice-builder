import React, { useState } from 'react'


import LineItem from './LineItem';


const LineItems = ({lineItems, setLineItems}) => {



  
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
        />
      ))}
   
            </div> 
  )
}

export default LineItems
