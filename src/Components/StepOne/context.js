import React, { createContext, useState } from 'react'

const Context = createContext()

export const Provider = ({ children }) => {
  const [buyer, setBuyer] = useState({
    quantity: 1
  })
  const value = {
    buyer,
    setBuyer
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const Consumer = Context.Consumer
export default Context