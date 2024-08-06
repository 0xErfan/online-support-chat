import React, { useState } from 'react'

const UserMessage = ({ msg, date }) => {

    const [isMessageHover, setIsMessageHover] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsMessageHover(true)}
            onMouseLeave={() => setIsMessageHover(false)}
            className="p-3 rounded-[10px] relative my-2 bg-black max-w-fit w-full ml-auto text-white text-[14px]"
        >
            {msg}

            <span
                className={`absolute left-0 -bottom-3 transition-all duration-300 ${isMessageHover ? 'opacity-100' : 'opacity-0'} text-[13px] text-white bg-gray rounded-md px-1 z-20`}
            >
                4:55pm
            </span>

        </div>
    )
}

export default UserMessage;