import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { helpCollections as collections } from '../helpCollections'

const helpCollections = collections

const HelpPage = ({ isSubCollection = false, setActiveLink }) => {

    return (
        <div className='mb-auto w-full relative h-full overflow-x-hidden'>

            <div className='flex flex-col gap-4 items-center justify-center w-full p-3 text-center bg-black text-white text-xl'>

                <div className={`flex ${isSubCollection ? 'justify-start' : 'justify-center'} items-center w-full gap-36`}>
                    {
                        isSubCollection ?
                            <IoIosArrowForward onClick={() => setActiveLink('help')} className="rotate-180 cursor-pointer" />
                            : null
                    }
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

                <div className="text-[16px] font-bold py-4 px-5"> {Array.from(helpCollections).length} collections </div>

                {
                    helpCollections.map(data => <CollectionsData key={data.title} setActiveLink={setActiveLink} {...data} />)
                }

            </div>

        </div>
    )
}

export default HelpPage;

const CollectionsData = ({ title, body, numberOfArticles, setActiveLink }) => {
    return (
        <div data-aos="fade-right" onClick={() => setActiveLink('sub-help-collection')} className="flex items-center justify-between hover:bg-black/10 transition-all cursor-pointer px-5">

            <div className="flex flex-col gap-1 text-[14px] grayBorder py-2">
                <p className="font-bold text-black">{title}</p>
                <p className="text-gray">{body}</p>
                <p className="text-gray">{numberOfArticles} articles</p>
            </div>

            <IoIosArrowForward className="shrink-0" />

        </div>
    )
}