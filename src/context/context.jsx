import React, { createContext, useState } from 'react'

export const Context = createContext()

// export const useContext = () => {
//   return useContext(Context)
// }

export function ContextProducts ({ children }) {
  const [contador, setContador] = useState(0)

  return (
    <Context.Provider value={{ contador, setContador }}>
        {children}
    </Context.Provider>
  )
}
