import "./App.css";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-10/12 mx-auto space-y-4">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
