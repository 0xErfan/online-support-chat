import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import { MdGif } from "react-icons/md";
import { MdOutlineAttachFile } from "react-icons/md";

const MessageSender = ({ message: messageText, sendMessage }) => {

    const [message, setMessage] = useState(messageText)

    const messageSender = () => {
        sendMessage(message)
        setMessage('')
    }

    return (
        <div
            onKeyUp={e => e.key == 'Enter' && messageSender()}
            className="absolute bottom-4 text-[14px] w-full ch:w-full px-5 bg-white"
        >

            <div className={`flex items-center gap-2 justify-between h-12 mt-autos rounded-full py-1 px-3 ${message.trim().length ? 'border-2 border-black' : 'shadow-border'}`}>

                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="bg-transparent outline-none flex-[6]"
                    type="text"
                    placeholder="Ask a question..."
                />

                <div className='flex items-center gap-3 text-gray'>

                    <MdOutlineEmojiEmotions className="size-4 cursor-pointer" />

                    {
                        !message.length
                            ?
                            <>
                                <MdGif className='size-6 cursor-pointer' />

                                <label className='cursor-pointer' htmlFor="file">
                                    <input className='hidden' id='file' type="file" />
                                    <MdOutlineAttachFile className='size-5 rotate-45' />
                                </label>

                            </>
                            : null
                    }

                    <div
                        onClick={messageSender}
                        className={`size-8 rounded-full transition-all ${message.trim().length ? 'bg-black text-white' : 'bg-black/10'}  flex items-center justify-center cursor-pointer`}
                    >
                        <FaArrowUp className="size-[14px]" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MessageSender