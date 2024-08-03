import { useState } from "react";
import { helpSvgs, homeSvgs, messageSvgs, newsSvgs } from "../svgFiles";

const links = ['home', 'messages', 'help', 'news']
const linksSvg = [homeSvgs, messageSvgs, helpSvgs, newsSvgs]

const ChatNavigation = () => {

    const [activeLink, setActiveLink] = useState('')

    return (
        <div className='h-20 w-full bg-white mt-auto flex ch:flex-1 shadow-border ch:text-center items-center justify-evenly'>

            {
                links.map((link, index) =>
                    <div
                        onClick={() => { setActiveLink(link) }}
                        className="flex flex-col items-center transition-all justify-center gap-1 cursor-pointer"
                        key={link}
                    >
                        <div className="size-[25px] ch:size-full ch:transition-all">
                            {linksSvg[index][activeLink == link ? 1 : 0]}
                        </div>
                        <p className={`text-[15px] transition-all duration-75 ${activeLink == link ? 'text-black font-bold' : 'text-black/70'}`}>{link}</p>
                    </div>
                )
            }

        </div>
    )
}

export default ChatNavigation