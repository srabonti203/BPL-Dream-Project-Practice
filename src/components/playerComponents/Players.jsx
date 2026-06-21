import { FaFlag, FaUser } from "react-icons/fa";

const Players = ({ player }) => {
  return (
    <div className=" flex flex-col items-center p-4 shadow-sm rounded-2xl">
      <div className="w-full h-60 mb-2">
        <img
          className="w-full h-full rounded-3xl object-cover object-center"
          src={player.image}
          alt="player image"
        />
      </div>
      <div className="self-start">
        <div className="flex gap-3">
          <FaUser></FaUser>
          <p>{player.name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2">
          <FaFlag></FaFlag>
          <p>{player.country}</p>
        </div>
        <div className="btn">{player.playerType}</div>
      </div>
      <div className="divider"></div>

      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-bold">Rating</p>
        <div className="btn">{player.rating}</div>
      </div>

      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-bold">Balling Type</p>
        <div className="btn">{player.bowlingType}</div>
      </div>

      <div className="flex justify-between items-center w-full mb-2">
        <div className="flex items-center gap-2">
          <p className="font-bold">Price : </p>
          <div>{player.price} K</div>
        </div>
        <div className="btn">Select Player</div>
      </div>
    </div>
  );
};

export default Players;
