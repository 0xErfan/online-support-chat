import { IoIosArrowBack } from "react-icons/io";
import FinMessage from "./FinMessage";
import UserMessage from "./UserMessage";
import MessageSender from "./MessageSender";
import { useEffect, useRef, useState } from "react";

const IntercomChat = ({ setActiveLink }) => {

    const [userMessage, setUserMessage] = useState('')
    const [messages, setMessages] = useState([])
    const lastMessageRef = useRef(null)

    const sendMessage = text => {
        setMessages(prev => [...prev, text])
        setUserMessage('')
    }

    // scroll to the last message after every new message
    useEffect(() => { lastMessageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }) }, [messages])

    return (
        <div className='mb-auto w-full relative h-full ch:overflow-x-hidden'>

            <div className='flex items-center bg-black'>
                <IoIosArrowBack onClick={() => setActiveLink('home')} className="text-white cursor-pointer size-6 ml-4" />
                <p className='h-[64px] flex items-center justify-center w-full p-3 mr-7 text-center bg-black text-white text-xl font-bold'>Intercom</p>
            </div>

            <div className="overflow-y-auto max-h-[542px] h-full pb-4 mt-4">

                <div className="text-center space-y-2">

                    <div className="flex items-center justify-center ch:size-[68px] ch:-ml-2 ch:border-[3px] ch:border-white ch:rounded-full ">
                        <img src="./randomGuy.jpeg" alt="random" />
                        <img src="./randomGuy.jpeg" alt="random" />
                        <img src="./randomGuy.jpeg" alt="random" />
                    </div>

                    <h5 className="text-[16px] font-bold text-black">We typically reply within a day</h5>

                    <p className="text-[14px] px-12 text-gray">We help your business grow by connecting you to your customers. For more support, tips & tricks, check out the Community https://community.intercom.com</p>

                </div>

                <div ref={lastMessageRef} className="flex flex-col m-4">

                    <FinMessage message={'Hi, welcome to Intercom 👋 You re speaking with Fin AI Agent. How can i help?'} />

                    {
                        messages.map((msg, index) => <UserMessage key={index} msg={msg} />)
                    }

                </div>

                <MessageSender
                    message={userMessage}
                    sendMessage={sendMessage}
                />

            </div>
        </div>
    )
}

export default IntercomChat