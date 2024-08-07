import { IoSearch } from "react-icons/io5";

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

                {
                    // helpCollections.map(data => <CollectionsData key={data.title} {...data} />)
                }

            </div>

        </div>
    )
}

export default SubHelpPage;