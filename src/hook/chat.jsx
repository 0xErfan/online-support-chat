import { createContext } from "react"

const initialState = {
    activePage: 'home',
    setActivePage: (page) => { activePage = page },
    isChatOpen: true,
    setIsChatOpen: (flag) => { isChatOpen = flag }
}

export const ChatContext = createContext(initialState)

export const ChatProvider = ({ children }) => {
    return (
        <ChatContext.Provider value={initialState}>
            {children}
        </ChatContext.Provider>
    )
}