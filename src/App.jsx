import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import AvailablePlayers from "./components/playerComponents/AvailablePlayers";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayer();
  const [coins, setCoins] = useState(5000);
  return (
    <div className="w-10/12 mx-auto space-y-4 py-4">
      <Navbar coins={coins}></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <AvailablePlayers
          coins={coins}
          setCoins={setCoins}
          playerPromise={playerPromise}
        ></AvailablePlayers>
      </Suspense>
    </div>
  );
}

export default App;
