import React, { useState } from "react";
import Card from "./components/Card";
import { players } from "../data";

function App() {
  const [search, setSearch] = useState("");

  const filterPlayer = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(search)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <input
        type="search"
        placeholder="Search players..."
        onChange={filterPlayer}
        className="mb-8 p-4 w-full max-w-md border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
      />
      <div className="flex flex-wrap justify-center gap-8">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="flex-1 min-w-[300px] max-w-[400px]">
            <Card
              name={player.name}
              team={player.team}
              position={player.position}
              ppg={player.ppg}
              imageUrl={player.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
