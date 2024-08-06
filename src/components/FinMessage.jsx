import { useState } from "react"

const FinMessage = ({ message, date }) => {

    // use make it dynamic with props k.
    const [isMessageHover, setIsMessageHover] = useState(false)

    return (
        <div className="flex items-end gap-2 my-4">

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
                { message }

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

export default FinMessage