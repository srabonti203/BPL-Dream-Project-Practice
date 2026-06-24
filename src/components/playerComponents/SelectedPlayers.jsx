import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coins,
  setCoins,
}) => {
  // console.log(selectedPlayers);

  const handleRemovePlayer = (player) => {
    console.log(player);
    let filteredPlayers = selectedPlayers.filter(
      (filteredPlayer) => filteredPlayer.name != player.name,
    );
    setSelectedPlayers(filteredPlayers);
    setCoins(coins + player.price);
    toast.error(`${player.name} is removed`);
  };
  return (
    <div>
      {selectedPlayers.length == 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4 mt-20">
          <div className="font-bold">No player selected yet</div>
          <div>Go to available tap to select player.</div>
        </div>
      ) : (
        <div>
          {selectedPlayers.map((player) => {
            return (
              <div
                className="flex items-center justify-between w-full shadow-sm rounded-3xl p-3"
                key={player.id}
              >
                <div className="flex items-center gap-5">
                  <div className="w-30 h-30">
                    <img
                      className="w-full h-full object-cover object-center rounded-3xl"
                      src={player.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-bold">{player.name}</h2>
                    <p>{player.bowlingType}</p>
                  </div>
                </div>
                <div>
                  <RiDeleteBin6Line
                    onClick={() => handleRemovePlayer(player)}
                    className="text-red-500 btn"
                  ></RiDeleteBin6Line>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;
