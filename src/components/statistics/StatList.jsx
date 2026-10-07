import React from 'react'
import Stat from './Stat';





const StatList = ({ statItems, variantStyles }) => {

  return (
    <section className="grid grid-cols-3 gap-3">
      {statItems.map((stat) => (
  <Stat key={stat.label} {...stat} variantStyles={variantStyles} />
))}
        </section>
  )
}

export default StatList
