import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const FinChat = ({ setActiveLink }) => {

    const [message, setMessage] = useState('')
    const [userMessage, setUserMessage] = useState([])

    const sendMessage = () => {

        const userMessage = message.trim()

        if (userMessage.length) {
            setUserMessage(prev => [...prev, userMessage])
            setMessage('')
        }
    }

    return (
        <div className="h-full w-full mb-auto relative">

            <div className="max-w-[600px] overflow-auto h-full">

                <div onClick={() => setActiveLink('home')} className="flex mb-auto p-2 text-black font-bold">
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

                <FinMessage />

                <div className="px-5 mt-10 space-y-3 pb-20">
                    {
                        userMessage.map(msg =>
                            <div
                                key={msg}
                                className="p-4 rounded-[10px] bg-black text-center max-w-fit w-full ml-auto text-white text-[14px]"
                            >
                                {msg}
                            </div>
                        )
                    }
                </div>

            </div>


            <div className="sticky bottom-4 text-[14px] px-4">

                <div className={`flex items-center gap-2 justify-between h-12 mt-auto bg-white rounded-full py-1 px-3 ${message.trim().length ? 'border-2 border-black' : 'shadow-border'}`}>

                    <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="bg-transparent outline-none flex-[6]"
                        type="text"
                        placeholder="Ask a question..."
                    />

                    <div className="flex items-center gap-3 text-gray flex-1">

                        <MdOutlineEmojiEmotions className="size-5 cursor-pointer" />

                        <div
                            onClick={sendMessage}
                            className={`size-8 rounded-full transition-all ${message.trim().length ? 'bg-black text-white' : 'bg-black/10'}  flex items-center justify-center cursor-pointer`}
                        >
                            <FaArrowUp className="size-[14px]" />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default FinChat

const FinMessage = ({ message, data }) => {

    // use make it dynamic with props k.
    const [isMessageHover, setIsMessageHover] = useState(false)

    return (
        <div className="flex items-end gap-2 px-5">

            <img
                className="object-contain size-8"
                src="./logo-dark.png"
                alt="fin logo"
            />

            <div
                onMouseEnter={() => setIsMessageHover(true)}
                onMouseLeave={() => setIsMessageHover(false)}
                className="basis-auto relative py-[17px] px-5 rounded-[10px] bg-black/10 text-black text-[14px] z-10"
            >
                Hi, welcome to Intercom 👋
                <br /><br />
                You're speaking with Fin AI Agent.
                <br />
                How can i help?

                <span
                    className={`absolute -left-8 transition-all duration-300 ${isMessageHover ? 'opacity-100' : 'opacity-0'} text-[13px] text-white top-0 bg-gray rounded-md px-1 z-20`}
                >
                    4:55pm
                </span>

                <span
                    className='absolute left-0 -bottom-6 transition-all text-[13px] text-gray rounded-md px-1 z-20'
                >
                    Bot - 45m ago.
                </span>

            </div>

        </div>
    )
}