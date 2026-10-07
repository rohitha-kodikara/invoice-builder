import React from 'react'

const Stat = ({label, value, variant = "total", variantStyles, prefix=""}) => {
    const styles = variantStyles[variant] ?? variantStyles.total;

   
   
  return (
        <div className={`rounded-xl border px-4 py-3 ${styles.box}`}>
      <p className={`text-xs ${styles.title}`}>{label}</p>
      <p className={`text-2xl font-bold ${styles.value}`}>{prefix}{value.toLocaleString()}</p>
    </div>
  )
}

export default Stat
