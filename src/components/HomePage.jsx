import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const HomePage = () => {
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
                        <div className="flex items-center justify-between p-4 cursor-pointer">
                            <p>Ask a question</p>
                            <div className='flex items-center gap-2'>
                                <img className='object-contain bg-center size-6' src="./logo-dark.png" alt="site logo" />
                                <IoIosArrowForward className="text-black size-4" />
                            </div>
                        </div>
                    </HomeBoxLayout>

                    <HomeBoxLayout>
                        <div className="flex flex-col items-center mt-4 justify-center ch:flex-1 ch:w-full gap-4">

                            <div className="px-4 w-full h-[177px]">
                                <img className='object-contain bg-center w-full h-full rounded-[10px]' src="./fin-ai.jpg" alt="fin copilot picture" />
                            </div>

                            <div className="text-[14px] px-4 transition-all hover:bg-[#f0f0f0] grayBorder py-3 mt-1">
                                <h4 className="text-black">Increase agent efficiency by 31%</h4>
                                <a href="#" className="text-gray mb-2">With Fin AI Copilot, your agent can onboard faster, solve issues in seconds, and spend more time focused on what really matter: building deeper, lasting customer relationships. Check out what AI-first support truly looks like.</a>
                            </div>
                        </div>
                    </HomeBoxLayout>

                    <HomeBoxLayout>
                        <div className="flex flex-col items-center mt-4 justify-center ch:flex-1 ch:w-full gap-4">

                            <div className="px-4 w-full h-[177px]">
                                <img className='object-contain bg-center w-full h-full rounded-[10px]' src="./community.png" alt="community picture" />
                            </div>

                            <div className="text-[14px] px-4 transition-all hover:bg-[#f0f0f0] grayBorder py-3 mt-1">
                                <h4 className="text-black">The Intercom Community</h4>
                                <a href="#" className="text-gray">Be sure to check out the Intercom Community for support, plus tips & tricks from Intercom users and much more.</a>
                            </div>
                        </div>
                    </HomeBoxLayout>

                    <HomeBoxLayout>
                        <div className="flex flex-col gap-1 p-2 text-[14px] ch:transition-all text-black">

                            <div className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer bg-[#f2f2f2] hover:black/10">
                                <p className="font-bold">Seach for help</p>
                                <IoSearch />
                            </div>

                            <AutoSearch link='#' text='Reporting metrics & attributes' />
                            <AutoSearch link='#' text='Create and track custom data attributes (CDAs)' />
                            <AutoSearch link='#' text='Get started with Contacts' />
                            <AutoSearch link='#' text='Set up event tracing in Intercom' />

                        </div>
                    </HomeBoxLayout>

                    <span className="py-2"></span>
                </div>

            </div>
        </div>

    )
}

export default HomePage

const HomeBoxLayout = ({ children }) => {
    return (
        <div className='bg-white shadow-border relative rounded-[10px] text-black mt-4'>
            {children}
        </div>
    )
}

const AutoSearch = ({ link, text }) => {
    return (
        <div className="flex items-center justify-between py-2 px-3 hover:bg-black/10 rounded-md cursor-pointer">
            <a href={link}>{text}</a>
            <IoIosArrowForward />
        </div>
    )
}