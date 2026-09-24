import { createContext, useState } from "react";

export const UserContext = createContext()

export function UserProvider({ children }) {

    const [user, setUser] = useState({
        nombre: "valentino",
        admin: true,
    })

    const toggleAdmin = () => {
        setUser((prev) => ({...prev, admin: !user.admin}))
    }

    return (
        <UserContext.Provider value={{user, toggleAdmin}}>
            {children}
        </UserContext.Provider>
    )
}

