import { useContext, useEffect, useState } from 'react'
import HomePage from './HomePage'
import NewsPage from './NewsPage'
import MessagesPage from './MessagesPage'
import HelpPage from './HelpPage'
import FinChat from './FinChat'
import IntercomChat from './IntercomChat'
import { ChatContext } from './Providers/chat'
import SubHelpPage from './SubHelpPage'

const ActivePage = () => {

    const [pageContent, setPageContent] = useState(null)
    const { state: { activePage } } = useContext(ChatContext)

    useEffect(() => {
        switch (activePage) {
            case 'home': {
                setPageContent(<HomePage />)
                break;
            }
            case 'news': {
                setPageContent(<NewsPage />)
                break;
            }
            case 'messages': {
                setPageContent(<MessagesPage />)
                break;
            }
            case 'help': {
                setPageContent(<HelpPage />)
                break;
            }
            case 'finChat': {
                setPageContent(<FinChat />)
                break;
            }
            case 'intercomChat': {
                setPageContent(<IntercomChat />)
                break;
            }
            case 'sub-help-collection': {
                setPageContent(<SubHelpPage />)
                break;
            }
            default: setPageContent(null)
        }
    }, [activePage])

    return (
        <>
            {pageContent}
        </>
    )
}

export default ActivePage