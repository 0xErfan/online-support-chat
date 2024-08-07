import { IoIosArrowForward } from "react-icons/io";
import { useContext } from "react";
import { ChatContext } from "./Providers/chat";

const CollectionsData = ({ title, body, numberOfArticles, sub_articles }) => {

    const { updater } = useContext(ChatContext)

    const seeSubCollections = () => {
        updater('activePage', 'sub-help-collection')
        updater('sub_articles', sub_articles)
    }

    return (
        <div
            onClick={seeSubCollections}
            className="flex items-center justify-between hover:bg-black/10 transition-all cursor-pointer px-5"
        >

            <div className="flex flex-col gap-1 text-[14px] grayBorder py-2">
                <p className="font-bold text-black">{title}</p>
                <p className="text-gray">{body}</p>
                <p className="text-gray">{numberOfArticles} articles</p>
            </div>

            <IoIosArrowForward className="shrink-0" />

        </div>
    )
}

export default CollectionsData;