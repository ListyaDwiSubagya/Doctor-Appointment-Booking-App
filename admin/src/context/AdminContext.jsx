import { createContext, useState } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

    const [addToken, setAddToken] = useState(localStorage.getItem('addToken')?localStorage.getItem('addToken'):'')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        addToken,setAddToken,
        backendUrl

    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider