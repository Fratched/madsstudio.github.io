import React from 'react';
import './Dice.css';

const Dice = ({ value, isRolling }) => {
    const renderDots = () => {
        const dots = [];
        const positions = {
            1: [[50, 50]],
            2: [[25, 25], [75, 75]],
            3: [[25, 25], [50, 50], [75, 75]],
            4: [[25, 25], [75, 25], [25, 75], [75, 75]],
            5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
            6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
        };

        const dotPositions = positions[value] || positions[1];
        
        dotPositions.forEach((pos, index) => {
            dots.push(
                <div
                    key={index}
                    className="dice-dot"
                    style={{
                        left: `${pos[0]}%`,
                        top: `${pos[1]}%`
                    }}
                />
            );
        });

        return dots;
    };

    return (
        <div className={`dice ${isRolling ? 'rolling' : ''}`}>
            <div className="dice-face">
                {renderDots()}
            </div>
        </div>
    );
};

export default Dice;
