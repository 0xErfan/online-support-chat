import NewsCard from "../NewsCard";

const NewsPage = () => {
    return (
        <div className='mb-auto w-full max-h-[580px] h-full'>

            <p className='h-[64px] flex items-center justify-center w-full p-3 text-center bg-black text-white text-xl font-bold'>News</p>

            <div className="overflow-auto h-full pb-4">

                <div className='flex flex-col gap-px text-black pt-4 px-4'>
                    <p className='font-bold text-[16px]'>Latest</p>
                    <p className='text-[14px]'>From Team Intercom</p>
                </div>

                <div className='flex flex-col ch:flex-1 ch:w-full gap-4 p-4'>

                    {/* change these props with your dynamic values buddy */}

                    <NewsCard
                        cardTitle={'Title for Card'}
                        cardBody={'Body for Card'}
                        labels={['New feature', 'Automation', 'Support']}
                        link={'#'}
                        key={'idk'}
                    />

                    <NewsCard
                        cardTitle={'Title for Card'}
                        cardBody={'Body for Card'}
                        labels={['New feature', 'Automation', 'Support']}
                        link={'#'}
                        key={'idk2'}
                    />

                    <NewsCard
                        cardTitle={'Title for Card'}
                        cardBody={'Body for Card'}
                        labels={['New feature', 'Automation', 'Support']}
                        link={'#'}
                        key={'idk3'}
                    />

                </div>

            </div>

        </div>
    )
}

export default NewsPage