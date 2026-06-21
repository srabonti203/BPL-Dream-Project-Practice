import { Suspense } from "react";
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
  return (
    <div className="w-10/12 mx-auto space-y-4">
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
      </Suspense>
    </div>
  );
}

export default App;
