import  { useState } from "react";
import Cardevent from "../components/Events/Cardevent";
import Modal from "../components/Events/Modal";
import Events from "../components/Events/Events";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const EventP = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterClick = (eventData) => {
    setSelectedEvent(eventData);
    setIsModalOpen(true);
    console.log(eventData)
  };

  return (
    <>

      <div className="w-full pb-10 flex flex-col items-center gap-6">
        {/* <h1 className="font-bold text-3xl text-[#b33f65] w-full text-center pb-2">
          Events For You
        </h1> */}
        <Navbar />
        <div className="flex gap-10 justify-center overscroll-auto flex-wrap">
          {Events.map((event) => (
            <Cardevent
              key={event.Id}
              images={event.Image}
              title={event.Title}
              Creator={event.Creator}
              date={event.Date}
              day={event.Day}
              time={event.Time}
              profile={event.profile}
              info={event.Info}
              location={event.Location}
              description={event.Description}
              duration={event.Duration}
              onRegisterClick={handleRegisterClick}
            />
          ))}
        </div>
        
      </div>
      <Footer />
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          eventData={selectedEvent}
        />
      )}
    </>
  );
};

export default EventP;
