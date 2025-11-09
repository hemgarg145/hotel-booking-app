import React from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const { rooms = [] } = useAppContext();
  const navigate = useNavigate();

  if (rooms.length === 0) return null;

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties
       around the world, offering unparalleled luxury and unforgettable experiences."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {rooms.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="my-16 px-6 py-2 text-sm font-medium border border-gray-300 rounded-md
        bg-white hover:bg-gray-100 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
