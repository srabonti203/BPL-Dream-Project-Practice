import { use, useState } from "react";
import Players from "./Players";

const AvailablePlayers = ({ playerPromise }) => {
  const players = use(playerPromise);
  // console.log(players);
  const [btnType, setBtnType] = useState("available");
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="font-bold">
          {btnType === "available" ? (
            <div>Available Players : {players.length}</div>
          ) : (
            <div>Selected Players  (2/{players.length})</div>
          )}
        </div>
        <div className="flex">
          <div
            onClick={() => setBtnType("available")}
            className={`btn border-r-0 rounded-l-full ${btnType === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </div>
          <div
            onClick={() => setBtnType("selected")}
            className={`btn border-r-0 rounded-r-full ${btnType === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected
          </div>
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
