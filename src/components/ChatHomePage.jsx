import { IoIosArrowForward } from "react-icons/io";

const ChatHomePage = () => {
    return (
        <div className="relative h-full">

            <div className="sticky top-0 right-0 left-0 homePageBgImage"></div>

            <div className='w-full overflow-auto mb-auto max-h-[624px] relative h-full'>

                <div className='flex flex-col gap-[100px] p-9 relative z-0'>

                    <div className='size-8 ch:size-full'>
                        <img
                            className='object-contain bg-center'
                            src="./logo-white.png"
                            alt="site logo"
                        />
                    </div>

                    <div className='flex items-start justify-start text-left flex-col gap-1'>
                        <h1 className='text-white/60 font-bold text-3xl [text-shadow:rgba(255, 255, 255, 0.3) 0px 0px 30px]'>Hello There.</h1>
                        <h2 className='text-white text-[34px] font-extrabold'>How can we help?</h2>
                    </div>

                </div>

                <div className="flex items-center -mt-[43px] flex-col ch:flex-1 ch:w-full px-4 ch:z-10">

                    {/* <RecentMessage/> */}

                    <HomeBoxLayout>
                        <div className="flex items-center justify-between cursor-pointer">
                            <p>Ask a question</p>
                            <div className='flex items-center gap-2'>
                                <img className='object-contain bg-center size-6' src="./logo-dark.png" alt="site logo" />
                                <IoIosArrowForward className="text-black size-4" />
                            </div>
                        </div>
                    </HomeBoxLayout>

                    <HomeBoxLayout padding={false}>
                        <div className="flex flex-col items-center mt-4 justify-center ch:flex-1 ch:w-full gap-4">

                            <div className="px-4 w-full h-[177px]">
                                <img className='object-contain bg-center w-full h-full rounded-[10px]' src="./fin-ai.jpg" alt="fin copilot picture" />
                            </div>

                            <div className="text-[14px] px-4 transition-all hover:bg-[#f0f0f0] grayBorder pt-3 mt-1">
                                <h4 className="text-black">Increase agent efficiency by 31%</h4>
                                <a href="#" className="text-gray">With Fin AI Copilot, your agent can onboard faster, solve issues in seconds, and spend more time focused on what really matter: building deeper, lasting customer relationships. Check out what AI-first support truly looks like.</a>
                            </div>
                        </div>
                    </HomeBoxLayout>

                </div>

            </div>
        </div>

    )
}

export default ChatHomePage

const HomeBoxLayout = ({ children, padding = true }) => {
    return (
        <div className={`${padding && 'p-4'}  bg-white shadow-border relative rounded-[10px] text-black mt-4`}>
            {children}
        </div>
    )
}