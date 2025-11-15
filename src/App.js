import React from "react";
import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1>MADS Studio</h1>
                <p>Where Madness Meets Creativity.</p>
                <button className="cta">View Our Projects</button>
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
                    <div className="project-card">
                        <h3>MadDice</h3>
                        <p>A chaotic dice-rolling combat game with unpredictable outcomes.</p>
                    </div>

                    <div className="project-card">
                        <h3>Color Thief</h3>
                        <p>
                            A world drained of color — steal colors from objects to unlock new
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
                <p>© {new Date().getFullYear()} MADS Studio — All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default App;
