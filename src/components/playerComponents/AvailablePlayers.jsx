import { use } from "react";
import Players from "./Players";

const AvailablePlayers = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-bold">Available Players : {players.length}</div>
        <div className="flex">
          <div className="btn border-r-0 rounded-l-full">Available</div>
          <div className="btn border-r-0 rounded-r-full">Selected</div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {players.map((player) => {
            return <Players key={player.id} player={player}></Players>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
