import React, { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

function App() {
    const [showDice, setShowDice] = useState(false);
    const [isRolling, setIsRolling] = useState(false);
    const [dice1Value, setDice1Value] = useState(1);
    const [dice2Value, setDice2Value] = useState(1);

    const handleMadDiceClick = () => {
        setShowDice(true);
        setIsRolling(true);

        setTimeout(() => {
            setDice1Value(Math.floor(Math.random() * 6) + 1);
            setDice2Value(Math.floor(Math.random() * 6) + 1);
            setIsRolling(false);
        }, 600);
    };

    const scrollToProjects = () => {
        document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="app">
            <header className="hero">
                <h1>MADS Studio</h1>
                <p>Where Madness Meets Creativity.</p>
                <button className="cta" onClick={scrollToProjects}>View Our Projects</button>
            </header>

            <section className="about">
                <h2>Who We Are</h2>
                <p>
                    MADS Studio is a small experimental game development group focused on
                    fast ideas, creative concepts, and fun prototypes. We build games,
                    engines, and mechanics that push design in a playful direction.
                </p>
            </section>

            <section className="projects">
                <h2>Featured Projects</h2>

                <div className="project-list">
                    <div 
                        className={`project-card mad-dice-card ${showDice ? 'active' : ''}`}
                        onClick={handleMadDiceClick}
                    >
                        <h3>MadDice</h3>
                        <p>A chaotic dice-rolling combat game with unpredictable outcomes.</p>
                        {showDice && (
                            <div className="dice-container">
                                <Dice value={dice1Value} isRolling={isRolling} />
                                <Dice value={dice2Value} isRolling={isRolling} />
                            </div>
                        )}
                        {!showDice && <div className="click-hint">Click to roll!</div>}
                    </div>

                    <div className="project-card">
                        <h3>Color Thief</h3>
                        <p>
                            A world drained of color – steal colors from objects to unlock new
                            areas and abilities.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Neon Janitor</h3>
                        <p>
                            Clean up a neon-soaked cybercity using futuristic tools and
                            experimental mechanics.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>© {new Date().getFullYear()} MADS Studio – All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default App;
