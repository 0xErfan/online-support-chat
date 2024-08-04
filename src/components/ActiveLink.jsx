import React, { useEffect, useState } from 'react'
import ChatHomePage from './ChatHomePage'

const ActiveLink = ({ activeLink }) => {

    const [pageContent, setPageContent] = useState(<div></div>)

    useEffect(() => {
        switch (activeLink) {
            case 'home': {
                setPageContent(<ChatHomePage />)
                break;
            }
            default: setPageContent(<div></div>)
        }
    }, [activeLink])

    return (
        <>
            {pageContent}
        </>
    )
}

export default ActiveLink