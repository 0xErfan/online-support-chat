import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import FinMessage from './FinMessage'
import UserMessage from "./UserMessage";
import MessageSender from "./MessageSender";
import { ChatContext } from "./Providers/chat";


const FinChat = () => {

    const { state: { prevPage }, updater } = useContext(ChatContext)

    const [message, setMessage] = useState('')
    const [userMessage, setUserMessage] = useState([])
    const lastMessageRef = useRef(null)

    const sendMessage = (msg) => {

        const userMessage = msg.trim()

        if (userMessage.length) {
            setUserMessage(prev => [...prev, userMessage])
            setMessage('')
        }
    }

    useEffect(() => { lastMessageRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [userMessage])

    return (
        <div className="h-full w-full mb-auto relative">

            <div className="max-h-[625px] overflow-auto overflow-x-hidden h-full">

                <div
                    onClick={() => {updater('activePage', prevPage); console.log(prevPage)}}
                    className="flex mb-auto p-2 text-black font-bold"
                >
                    <IoIosArrowBack className="size-12 p-[13px] rounded-[10px] transition-all cursor-pointer hover:bg-black/10" />
                    <h4 className="ml-32 mt-3 text-[18px]">Fin</h4>
                </div>

                <div className="flex flex-col items-center gap-4 my-5">
                    <img
                        className="object-contain size-16"
                        src="./logo-dark.png"
                        alt="fin logo"
                    />
                    <p className="text-[16px] font-bold">AI Agent answers instantly</p>
                </div>

                <div ref={lastMessageRef} className="px-5 mt-10 space-y-3 pb-20">

                    <FinMessage message={'Hi, welcome to Intercom 👋 You re speaking with Fin AI Agent. How can i help?'} />

                    {
                        userMessage.map((msg, index) => <UserMessage key={index} msg={msg} />)
                    }

                </div>

            </div>

            <MessageSender message={message} sendMessage={sendMessage} />
        </div>
    )
}

export default FinChat