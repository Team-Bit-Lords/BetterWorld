import VolCard from "../components/Volunteer/VolCard"
import VolHead from "../components/Volunteer/VolHead"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"
import { volData } from "../components/Volunteer/VolData"
import { useNavigate } from "react-router-dom"


const Volunteer = () => {
    const naviagte = useNavigate();
    return (
        <>
            <Navbar />
            <VolHead />
            <div className="flex flex-wrap px-[100px] gap-8 pt-[60px]">
                {volData.map((item) => {
                    return <VolCard key={item.id} name={item.name} imageSrc={item.imageSrc} />
                })}
            </div>
            <button onClick={()=>{naviagte('/volunteer/form')}} className="btn mt-5 bg-primary hover:text-black text-white ml-[100px]"> Join Us </button>
            <Footer />
        </>
    )
}

export default Volunteer