import { useContext } from "react";
import { helpSvgs, homeSvgs, messageSvgs, newsSvgs } from "../svgFiles";
import { ChatContext } from "./Providers/chat";

const links = ['home', 'messages', 'help', 'news']
const linksSvg = [homeSvgs, messageSvgs, helpSvgs, newsSvgs]

const pagesWithoutNavigation = ['finChat', 'intercomChat', 'searchPage']

const ChatNavigation = () => {

    const { state: { activePage }, updater } = useContext(ChatContext)

    return (
        <div className={`h-20 w-full ${pagesWithoutNavigation.includes(activePage) && 'hidden'} bg-white absolute right-0 left-0 bottom-0 mt-auto flex ch:flex-1 shadow-border ch:text-center items-center justify-evenly z-[9999]`}>

            {
                links.map((link, index) =>
                    <div
                        onClick={() => { updater('activePage', link) }}
                        className="flex flex-col items-center transition-all justify-center gap-1 cursor-pointer text-[14px]"
                        key={link}
                    >
                        <div className="size-[25px] ch:size-full ch:transition-all">
                            {linksSvg[index][activePage.includes(link) ? 1 : 0]}
                        </div>

                        <p className={`text-[14px] transition-all duration-75 ${activePage.includes(link) ? 'text-black font-bold' : 'text-black/70'}`}>
                            {link[0].toUpperCase() + link.slice(1)}
                        </p>

                    </div>
                )
            }

        </div>
    )
}

export default ChatNavigation;