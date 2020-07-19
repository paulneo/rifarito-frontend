import React, { createContext,useState } from 'react'
import moment from 'moment'

const Context = createContext()

export const Provider = ({  children }) => {
  moment.locale('es')
  const [modal, setModal] = useState(false)

  const value = {
    modal,
    setModal,

  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const Consumer = Context.Consumer
export default Context
