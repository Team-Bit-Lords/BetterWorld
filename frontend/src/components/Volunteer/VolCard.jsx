/* eslint-disable react/prop-types */


const VolCard = ({ name, imageSrc }) => {
    return (

        <article
            className="overflow-hidden w-[300px] shadow-md rounded-lg border border-gray-100 bg-white"
        >
            <img
                alt="Office"
                src={imageSrc}
                className=" w-full object-cover"
            />

            <div className="pt-2">
                <p className="my-3 mx-4 font-semibold text-2xl">{name}</p>
                <hr />
                <p className="text-[#616161] py-2 pl-4 font-semibold">Volunteer</p>
            </div>
        </article>

    )
}

export default VolCard