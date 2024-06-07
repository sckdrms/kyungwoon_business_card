// InformationComponents.js
import React, { useState } from 'react';
import '../css/InfomationComponents.css';

function InformationComponent({ isVisible }) {
  const [cards, setCards] = useState([
    { id: 1, name: '정진우', job: '팀원', isHovered: false, className: 'teampic1', hoverName: 'GitHub', hoverLink: 'https://github.com/jjw6712' },
    { id: 2, name: '김창근', job: '팀원', isHovered: false, className: 'teampic2', hoverName: 'GitHub', hoverLink: 'https://github.com/sckdrms' },
  ]);

  const handleMouseOver = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, isHovered: true } : card
    ));
  };

  const handleMouseOut = (id) => {
    setCards(cards.map(card =>
      card.id === id ? { ...card, isHovered: false } : card
    ));
  };

  return (
    <div className={`grid-introduce ${isVisible ? 'noneup' : ''}`}>
      {cards.map((card) => (
        <div 
          key={card.id}
          className="grid-introduce-card"
          onMouseOver={() => handleMouseOver(card.id)}
          onMouseOut={() => handleMouseOut(card.id)}
        >
          <div className={card.className}></div>
          <div className="text-container">
            <p className={`text-content ${!card.isHovered ? 'show' : ''}`}>
              {card.name}
            </p>
            <p className={`text-content ${card.isHovered ? 'show' : ''}`}>
              {card.hoverName}
            </p>
          </div>
          <div className="text-container">
            <p className={`text-content ${!card.isHovered ? 'show' : ''}`}>
              {card.job}
            </p>
            <p className={`text-content ${card.isHovered ? 'show' : ''}`}>
              {card.hoverLink}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InformationComponent;
