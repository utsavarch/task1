import React from "react";

function Card({ name, team, position, ppg, imageUrl }) {
  return (
    <div className="p-4">
      <div className="rounded-2xl shadow-lg shadow-gray-400 relative overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="bg-white/80 p-6 rounded-2xl hover:bg-white transition duration-300 ease-in-out flex justify-center items-center flex-col gap-4">
          <img
            src={imageUrl}
            alt={name}
            className="w-20 h-20 rounded-full border-4 border-gray-300 shadow-md"
          />
          <div className="text-center">
            <h3 className="text-gray-900 font-bold text-2xl">{name}</h3>
            <p className="text-gray-600">{team}</p>
            <p className="text-gray-500">Position: {position}</p>
            <p className="text-gray-500">PPG: {ppg}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
