

const SocHead = () => {
    return (
        <div className="w-[100%] bg-white shadow-md rounded-2xl flex justify-between px-2 items-center h-[80px]" >
            <p className="font-semibold text-lg">All Updates</p>
            <select className="select select-bordered max-w-xs">
                <option disabled selected>Area</option>
                <option>Your area</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Kanpur</option>
            </select>
        </div>
    )
}

export default SocHead