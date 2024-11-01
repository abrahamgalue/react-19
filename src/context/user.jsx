import { createContext, useState, useCallback } from 'react'

export const UserContext = createContext({ name: null, isLogged: false })

export function UserContextProvider({ children }) {
  const [name, setName] = useState(null)
  const [isLogged, setIsLogged] = useState(false)

  const updateUser = useCallback(({ name, isLogged }) => {
    setName(name)
    setIsLogged(isLogged)
  }, [])

  return (
    <UserContext.Provider value={{ name, isLogged, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
