import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import NewsPage from './NewsPage'
import MessagesPage from './MessagesPage'

const ActiveLink = ({ activeLink }) => {

    const [pageContent, setPageContent] = useState(null)

    useEffect(() => {
        switch (activeLink) {
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