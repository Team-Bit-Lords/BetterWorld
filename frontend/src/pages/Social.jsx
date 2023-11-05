import Banner from "../components/Social/Banner"
import Minister from "../components/Social/Minister"
import Navbar from "../components/common/Navbar"
import Trend from "../components/Social/Trend"
import Content from "../components/Social/Content"
import SocHead from "../components/Social/SocHead"

const Social = () => {
    return (
        <div className="bg-[#F8F8FB] px-[50px]">
            <Navbar/>
            <Banner/>
            <div className=" mt-6 pb-5 flex gap-10" >
                <Trend/>
                <div className="w-[37%] justify-center flex gap-8 flex-col items-center">
                    <SocHead/>
                    <Content/>
                </div>
                <Minister/>
            </div>
        </div>
    )
}

export default Social