import { createContext, useContext, useState } from "react";

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    return <SidebarContext.Provider value={{isSidebarOpen, setSidebarOpen}}>
        {children}
    </SidebarContext.Provider>
}

export const useSidebar = () => useContext(SidebarContext)