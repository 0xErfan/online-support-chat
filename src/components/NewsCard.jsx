import { IoIosArrowForward } from 'react-icons/io';

const NewsCard = ({ link, labels, cardTitle, cardBody }) => {

    return (
        <div data-aos='zoom-out' aos-duration={300} className='rounded-[10px] shadow-border overflow-hidden'>

            <div className='max-h-[140px] h-full w-full'>
                <img
                    className='h-[140px] w-full object-cover bg-center'
                    src="./newsImageExample.png"
                    alt="example image"
                />
            </div>

            <div className='py-4 px-5'>

                <div className='grid grid-cols-3 gap-2 ch:bg-black/10 text-black ch:p-[3px] text-[14px] ch:rounded-xl text-center'>
                    {
                        labels.map(text => <p key={text}>{text}</p>)
                    }
                </div>

                <a href={link} className='flex items-center justify-between mt-3 gap-1'>
                    <div className="flex items-center flex-col ch:line-clamp-2 text-[14px]">
                        <p className="text-black">{cardTitle}</p>
                        <p className="text-gray">{cardBody}</p>
                    </div>
                    <IoIosArrowForward className="shrink-0 size-3" />
                </a>
            </div>
        </div>
    )
}

export default NewsCard;