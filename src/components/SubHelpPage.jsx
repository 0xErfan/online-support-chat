import { IoSearch } from "react-icons/io5";
import { helpCollections as collections } from '../helpCollections'
import CollectionsData from "./CollectionsData";

const helpCollections = collections

const SubHelpPage = () => {

    return (
        <div className='mb-auto w-full relative h-full overflow-x-hidden'>

            <div className='flex flex-col gap-4 items-center justify-center w-full p-3 text-center bg-black text-white text-xl'>

                <p className="font-bold w-full m-auto text-center">Help</p>

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
                    helpCollections.map(data => <CollectionsData key={data.title} {...data} />)
                }

            </div>

        </div>
    )
}

export default SubHelpPage;