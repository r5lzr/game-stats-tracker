import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Navbar } from "./components/header/Navbar";
import { Home, Leagueoflegends, Rocketleague, Counterstrike } from "./components/pages";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/league-of-legends" element={<Leagueoflegends />}/>
          <Route path="/rocket-league" element={<Rocketleague />}/>
          <Route path="/counter-strike" element={<Counterstrike />}/>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App
