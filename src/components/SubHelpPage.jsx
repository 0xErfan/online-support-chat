import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ChatContext } from "./Providers/chat";
import CollectionsData from "./CollectionsData";

const SubHelpPage = () => {

    const { state: { prevPage, subHelpCollections }, updater } = useContext(ChatContext)

    return (
        <div className='mb-auto w-full relative h-full overflow-x-hidden'>

            <div className='flex flex-col gap-4 items-center justify-center w-full p-3 text-center bg-black text-white text-xl'>

                <div className={`flex justify-start items-center w-full gap-36`}>
                    <IoIosArrowForward onClick={() => updater('activePage', prevPage)} className="rotate-180 cursor-pointer" />
                    <p className="font-bold">Help</p>
                </div>

                <div className="flex items-center w-full justify-between text-black bg-white rounded-[10px] text-[14px] p-2">
                    <input
                        className="w-full flex-[9] bg-white outline-none text-gray"
                        placeholder="Search for help"
                    >
                    </input>
                    <IoSearch className="bg-white size-4 flex-1 cursor-pointer" />
                </div>

            </div>

            <div className="flex flex-col justify-start max-h-[512px] overflow-auto pb-3">

                <div className="flex flex-col w-full gap-3 text-[14px] py-4 px-5">

                    <div>
                        <p className="text-[16px] text-black font-bold">Intercom Overview</p>
                        <p>See how your AI first-customer service solution works.</p>
                    </div>

                    <div className="flex items-center ch:flex-1 w-full text-gray justify-between">
                        <p>22 articles by Des and 2 others</p>
                        <div className="flex items-center justify-end ch:size-[38px] ch:-ml-2 ch:border-[3px] ch:border-white ch:rounded-full ">
                            <img src="./randomGuy.jpeg" alt="random" />
                            <img src="./randomGuy.jpeg" alt="random" />
                            <img src="./randomGuy.jpeg" alt="random" />
                        </div>
                    </div>

                </div>

                <div className="text-[14px] grayBorder">
                    {

                        ['linkOne', 'linkTwo', 'andThree']
                            .map(link =>
                                <div onClick={() => updater('activePage', 'searchPage')} className="flex w-full justify-between hover:bg-black/10 transition-all py-2 px-5">
                                    <p>{link}</p>
                                    <IoIosArrowForward />
                                </div>
                            )
                    }
                </div>

                <CollectionsData
                    body={'body body body body'}
                    numberOfArticles={12}
                    title={'title title title'}
                    key={21}
                />

            </div>

        </div>
    )
}

export default SubHelpPage;