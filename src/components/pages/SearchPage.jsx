import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../Providers/chat"
import { IoIosArrowBack } from "react-icons/io"
import { RiExpandDiagonal2Line } from "react-icons/ri";
import { MdOutlineLanguage } from "react-icons/md";
import { TfiNewWindow } from "react-icons/tfi";


export const SearchPage = () => {

    const { state: { prevPage, isChatExpanded }, updater } = useContext(ChatContext)
    const [userSatisfiedNumber, setUserSatisfiedNumber] = useState(null)

    useEffect(() => { updater('isChatExpanded', true) }, [])

    return (
        <div className="size-full overflow-y-auto">

            <div className="flex justify-between w-full p-2">

                <IoIosArrowBack
                    onClick={() => updater('activePage', prevPage == 'news' ? 'news' : prevPage.includes('help') ? 'help' : 'home')}
                    className="size-12 p-[13px] rounded-[10px] transition-all cursor-pointer hover:bg-black/10"
                />

                <RiExpandDiagonal2Line
                    onClick={() => updater('isChatExpanded', !isChatExpanded)}
                    className="size-12 p-[13px] rounded-[10px] transition-all cursor-pointer hover:bg-black/10"
                />

            </div>

            <div className="w-full">
                <img
                    src="./newsImageExample.png"
                    className={`object-contain object-center w-full ${isChatExpanded ? '[h-377px]' : 'h-[215px]'}`}
                    alt="news img"
                />

                <div className="mt-5 space-y-4 px-16">

                    <div className={`grid ${isChatExpanded ? 'grid-cols-7' : 'grid-cols-2'}  gap-2 ch:bg-black/10 text-black ch:p-[3px] text-[14px] ch:rounded-xl text-center my-4`}>
                        <p>Support</p>
                        <p>Agent AI</p>
                        <p>New</p>
                    </div>

                    <h4 className="text-black font-bold text-[28px]">Set up a backup workflow when Fin AI Agent reaches a resolution limit</h4>

                    <div className="flex items-center gap-2">
                        <img
                            src="./randomGuy.jpeg"
                            className="object-contain bg-center size-6 rounded-full"
                            alt="random🤔"
                        />
                        <p className="text-gray text-[14px]">Shared by Julia - 2w ago</p>
                    </div>

                    <p>We've introduced a new Workflow action called “Resolution limit reached” that can be used to trigger a backup workflow once your Fin AI Agent usage limit has been reached. There are two ways to set this up.</p>

                </div>

                <div className="flex items-center flex-col justify-center gap-4 h-full p-6 grayBorder mt-4">

                    <p className="text-gray text-[14px]">Did this answer your question?</p>

                    <div className="flex items-center gap-3 ch:text-2xl ch:transition-all">
                        {
                            ["😔", "😐", "😊"]
                                .map((emj, index) =>
                                    <span
                                        onClick={() => setUserSatisfiedNumber(index)} // if the "😔" selected, let the user talk to ai for more help
                                        key={index}
                                        className={`cursor-pointer hover:scale-125 ${typeof userSatisfiedNumber == 'number' && userSatisfiedNumber !== index && 'opacity-40'}`}>
                                        {emj}
                                    </span>)
                        }
                    </div>

                    {
                        userSatisfiedNumber == 0
                            ?
                            <button
                                onClick={() => updater('activePage', 'finChat')}
                                className="max-w-[157px] w-full rounded-[10px] m-auto bg-black text-white px-3"
                            >
                                <div className="flex items-center justify-between text-center gap-2 py-[10px]">
                                    <p className="text-[14px] font-bold">Ask a question</p>
                                    <svg
                                        width="13"
                                        height="15"
                                        fill="none"
                                        viewBox="0 0 13 15"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M6.29 0a6.29 6.29 0 0 1 6.29 6.29c0 6.29-6.284 8.71-6.284 8.71v-2.42H6.29A6.29 6.29 0 1 1 6.29 0m.58 9.103a.578.578 0 1 0 0 .001zm-.578-5.71c-1.01 0-1.84.78-1.925 1.77l.957.135a.97.97 0 0 1 1.938.028c0 .964-1.355.964-1.355 2.312v.108h.77v-.108c0-.77 1.547-.963 1.547-2.312a1.934 1.934 0 0 0-1.932-1.932z">
                                        </path>
                                    </svg>
                                </div>
                            </button>
                            : null
                    }

                    <div className="flex items-center cursor-pointer text-gray hover:text-black text-[14px]">

                        <MdOutlineLanguage className="size-5 flex-1" />

                        <select className="max-w-[190px] w-full px-2 flex-[5] outline-none">
                            <option value="eng">English</option>
                            <option value="persian">Persian</option>
                        </select>

                    </div>

                    <div className="flex items-center gap-1 text-gray text-[14px] cursor-pointer">
                        <TfiNewWindow />
                        <p>Open in help center</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
