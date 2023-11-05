import ContendCard from "./ContendCard"
import { ContentData } from "./ContentData"

const Content = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            {ContentData.map((item) => {
                return <ContendCard key={item.id} name={item.name} image={item.image} issue ={item.issue} brief={item.brief} />
            })}
        </div>
    )
}


export default Content