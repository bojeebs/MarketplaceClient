import { createContext, useState, useContext } from "react";

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated, user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}