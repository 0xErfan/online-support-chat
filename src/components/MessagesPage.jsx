import { IoIosArrowForward } from "react-icons/io"

const MessagesPage = () => {
    return (
        <div className='mb-auto w-full max-h-[580px] relative h-full'>

            <p className='h-[64px] flex items-center justify-center w-full p-3 text-center bg-black text-white text-xl font-bold'>Messages</p>

            <div className="overflow-auto h-full pb-4">

                <div className="flex items-center flex-col">

                    <PreviousChat
                        message={'Hi, can you gimme more info about your problem for better guidelines?'}
                        time={'21/12/12'}
                        key={'random'}
                    />

                    <PreviousChat
                        message={'Hi, can you gimme more info about your problem for better guidelines?'}
                        time={'21/12/12'}
                        key={'random'}
                    />

                    <div className="flex items-center justify-start w-full grayBorder gap-2 py-3 px-5 cursor-pointer">

                        <img className='object-contain bg-center size-10' src="./logo-dark.png" alt="site logo" />

                        <div className="ch:w-full basis-[90%]">

                            <div className='flex items-center justify-between gap-2 '>
                                <div className='flex flex-col gap-1 text-left ch:line-clamp-1 text-[14px]'>
                                    <p>Hi 👋 How can I help you?</p>
                                    <p className="text-gray">Intercom - 1h ago</p> {/* use dynamic time prop here for the date */}
                                </div>
                                <IoIosArrowForward className="shrink-0 text-black size-[14px]" />
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* ask me a qs button */}
            <button className="absolute right-0 left-0 -bottom-6 max-w-[157px] cursor-pointer w-full rounded-[10px] m-auto bg-black text-white">
                <div className="flex items-center justify-between text-center gap-2 py-[10px] px-4">
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

        </div>
    )
}

export default MessagesPage

const PreviousChat = ({ message, time }) => {
    return (
        <div className='flex items-center justify-between gap-2 py-3 px-5 cursor-pointer grayBorder'>
            <div className='flex flex-col gap-1 text-left ch:line-clamp-1 text-[14px]'>
                <p>{message}</p>
                <p className="text-gray">Intercom - 1h ago</p> {/* use dynamic time prop here for the date */}
            </div>
            <IoIosArrowForward className="shrink-0 text-black size-[14px]" />
        </div>
    )
}