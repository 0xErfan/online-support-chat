import { useEffect, useState } from 'react'
import HomePage from './HomePage'
import NewsPage from './NewsPage'
import MessagesPage from './MessagesPage'
import HelpPage from './HelpPage'
import FinChat from './FinChat'
import IntercomChat from './IntercomChat'

const ActiveLink = ({ activeLink, setActiveLink }) => {

    const [pageContent, setPageContent] = useState(null)

    useEffect(() => {
        switch (activeLink) {
            case 'home': {
                setPageContent(<HomePage setActiveLink={setActiveLink} />)
                break;
            }
            case 'news': {
                setPageContent(<NewsPage />)
                break;
            }
            case 'messages': {
                setPageContent(<MessagesPage setActiveLink={setActiveLink} />)
                break;
            }
            case 'help': {
                setPageContent(<HelpPage />)
                break;
            }
            case 'finChat': {
                setPageContent(<FinChat setActiveLink={setActiveLink} />)
                break;
            }
            case 'intercomChat': {
                setPageContent(<IntercomChat setActiveLink={setActiveLink} />)
                break;
            }
            default: setPageContent(null)
        }
    }, [activeLink])

    return (
        <>
            {pageContent}
        </>
    )
}

export default ActiveLink