import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Navbar } from "./components/Navbar";
import { Home, Leagueoflegends, Rocketleague, Counterstrike } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/league-of-legends" element={<Leagueoflegends />}/>
        <Route path="/rocket-league" element={<Rocketleague />}/>
        <Route path="/counter-strike" element={<Counterstrike />}/>
      </Routes>
    </div>
  );
}

export default App
