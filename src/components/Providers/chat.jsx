import { createContext, useEffect, useState } from "react"

const initialState = {
    activePage: 'home',
    prevPage: 'home',
    isChatOpen: false,
    isChatExpanded: false,
    subHelpCollections: {}
}

export const ChatContext = createContext(initialState)

const ChatProvider = ({ children }) => {

    const [state, setState] = useState(initialState)

    const updater = (key, value) => {
        setState(prev => ({ ...prev, [key]: value }))
    }

    // using cleanup function of effect to get the value of activePage before its update
    useEffect(() => {
        return () => setState(prev => ({ ...prev, prevPage: state.activePage }))
    }, [state.activePage])

    return (
        <ChatContext.Provider value={{ state, updater }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider;