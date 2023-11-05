import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {  useState } from "react";

import calender from '../assets/calender.png'
import locationn from '../assets/location.png'
import duration from '../assets/duration.png'

const RegisterForEventPage = () => {
  const navigate = useNavigate();
  const [openmodal, setopenmodal] = useState(false);
  const handleclick = () => {
    setopenmodal(true);
    setTimeout(() => {
        navigate("/");
      }, 2000);
  };

  const location = useLocation();
  const eventData = location.state?.eventData;
  return (
    <>
      <div className="">
        {eventData && (
          <div className="flex flex-col items-center">
            <div className="border  border-gray-200 relative flex w-[calc(100vw-16%)] rounded-3xl justify-center ">
              <div className="absolute inset-0 bg-blue-100 blur-sm rounded-3xl"></div>
              <img
                className="relative z-10 h-96 rounded-lg"
                src={eventData.images}
              />
            </div>

            <div className="flex items-start mx-28 pl-1 mt-4">
              <div className="w-[80%] flex flex-col gap-4">
                <div>
                  <p className="mb-0 text-lg font-semibold text-gray-500">
                    {eventData.day}
                  </p>
                  <h1 className="mt-0 text-6xl font-bold text-gray-800">
                    {eventData.title}
                  </h1>
                </div>
                <p className="text-xl">{eventData.info}</p>
                <div>
                  <p className=" font-bold text-3xl mb-1 mt-2">Date and Time</p>
                  <div className="flex gap-2">
                    <img src={calender} className="w-6"/>
                  <p className="text-md font-semibold">
                    {eventData.day} | {eventData.time} IST
                  </p></div>
                </div>
                <div>
                  <p className="font-bold text-2xl mb-1 mt-4">Location</p>
                  <div className="flex gap-2">
                    <img src={locationn} className="w-6"/>
                  <p className="text-md font-semibold">{eventData.location}</p></div>
                </div>
                <div>
                  <p className="font-bold text-2xl mb-1 mt-6">
                    About This Event
                  </p>
                  <div className="flex gap-10 py-1 text-md font-semibold">
                    <div className="flex gap-2">
                      <img src={duration} className="w-6"/>
                    <p className="">Duration: {eventData.duration} hours </p></div>
                    <p> Reserve a spot now</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-500 font-bold mt-2">
                    {eventData.title}
                  </p>
                  <p className="text-lg text-gray-700">
                    {eventData.description}
                  </p>
                </div>
              </div>
              <div className="border border-gray-300 m-4 w-[20%] rounded-lg p-4 flex flex-col gap-4">
                <div className=" border-2 p-2 border-blue-400 flex justify-around items-center rounded-lg mt-2">
                  <h1 className="text-center font-semibold">Reserve a Spot</h1>
                  <p className="font-semibold text-gray-500">Free</p>
                </div>
                <button
                  className=" rounded-md text-white py-1 px-8 text-center bg-primary  border-green-900"
                  onClick={handleclick}
                >
                  Reserve{" "}
                </button>
              </div>
            </div>
          </div>
        )}
        {openmodal && (
          <div className="toast toast-center toast-top z-50">
            <div className="flex rounded-lg bg-green-400 py-2 px-4 text-center">
              <span className="font-semibold">Registration Successful! Check your Email</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RegisterForEventPage;
