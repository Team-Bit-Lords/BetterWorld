/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import reward from "../../assets/reward.png";

const Modal = ({ onClose, eventData }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const navigate = useNavigate();
  const handleregister = () => {
    console.log(eventData);
    navigate("/regevent", { state: { eventData } });
  };
  const calculatePoints = (duration) => {
    var points;
    if (duration >= 3) {
      points = 10;
    } else {
      points = 5;
    }
    return points;
  };

  const points = calculatePoints(eventData.duration);

  return (
    <dialog className="modal drop-shadow-2xl border border-gray-700" open>
      <div className="modal-box">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0"
          onClick={onClose}
        >
          ✕
        </button>
        <div>
          {eventData && (
            <div>
              <h1 className="font-bold text-lg rounded-lg text-blue-900 shadow text-center px-2">{eventData.title}</h1>
              <p className="m-1 mt-2 font-medium text-gray-600">
                Creator: {eventData.Creator}
              </p>
              <p className="m-1 font-medium text-gray-600">
                Date: {eventData.date} ({eventData.day})
              </p>
              <p className="m-1 font-medium text-gray-600">Time: {eventData.time}</p>
              <p className="m-1 font-medium text-gray-600">
                Duration: {eventData.duration} hours
              </p>
              <p className="m-1 font-medium text-gray-600">Description: {eventData.info}</p>
              <div className="flex items-center mb-6">
                <img src={reward} className="h-6  rounded-lg" />
                <p
                  className="m-1 font-medium text-gray-900 hover:cursor-pointer"
                  title="Additional Reward for attending this event"
                >
                  Redeem Points: {points}
                </p>
              </div>
            </div>
          )} 
          <div className="flex justify-center">
          <button
            className="bg-primary hover:bg-blue-500 text-white py-1 px-24 rounded border-0 items-center"
            onClick={handleregister}
            eventData={selectedEvent}
          >
            Confirm
          </button></div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
