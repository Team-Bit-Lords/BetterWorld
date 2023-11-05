/* eslint-disable react/prop-types */
import icon from '../../assets/Avatar.png'

const Cardevent = ({
  images,
  title,
  Creator,
  date,
  day,
  time,
  duration,
  location,
  info,
  description,
  onRegisterClick,
}) => {
  const handleRegisterClick = () => {
    onRegisterClick({ title, Creator, date,day, time,location, info,duration,description,images});
  };
  return (
    <>
      <div className=" flex flex-col gap-2 h-auto border-gray-100 border-2 rounded-2xl hover:shadow-xl w-[21rem]">
        <img
          className="overflow-hidden rounded-t-lg rounded-b-sm w-full h-60"
          src={images}
          alt={title}
        />
        <div className="px-4 py-1">
          <h1 className="font-bold text-gray-700 text-xl border-black border-b-1 ">{title}</h1>
          <h1 className=" text-red-700 font-medium text-lg">
            {date} | {time}
          </h1>
          <p className="whitespace-normal text-gray-600">
            Duration: {duration} hours
          </p>
          <p className="whitespace-normal text-gray-600">{info}</p>
          <div className="flex items-center gap-3 mt-2">
            <img src={icon}  className=" w-6 h-6"/>
            <p className="font-semibold text-gray-700">{Creator}</p>
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <button
            className="bg-primary btn text-white hover:text-black px-6"
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Cardevent;
