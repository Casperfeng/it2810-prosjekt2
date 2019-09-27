import React from 'react';
import './BurgerMenu.css';

export default function BurgerMenu(props) {
  //brukes til å 'triggere' burgermeny animasjonen

  const triggerAnimation = props.clicked ? 'event' : '';
  return (
    <div className='burgermenu'>
      <div className={`bar ${triggerAnimation}1`} />
      <div className={`bar ${triggerAnimation}2`} />
      <div className={`bar ${triggerAnimation}3`} />
    </div>
  );
}
