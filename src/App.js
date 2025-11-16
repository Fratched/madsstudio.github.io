import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Dice from "./Dice";

function Home() {
    return (
        <div className="container">
            <img src={logo} alt="MADS Logo" className="logo" />
            <h1>MADS Studio</h1>
            <p>The future of indie games starts here.</p>

            <div className="button-row">
                {/* Clicking this navigates to MadDice page */}
                <Link to="/maddice" className="btn">MadDice</Link>
                <button className="btn">Contact</button>
            </div>
        </div>
    );
}

function MadDicePage() {
    return (
        <div className="page">
            <h1>MadDice</h1>
            <p>Click the dice to roll it!</p>

            <Dice /> {/* 3D Dice shows here */}

            <Link to="/" className="btn back-btn">⬅ Back to Home</Link>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/maddice" element={<MadDicePage />} />
            </Routes>
        </Router>
    );
}
