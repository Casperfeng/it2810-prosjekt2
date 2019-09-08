import React, { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu';
import SideNav from './SideNav/SideNav';
import './Menu.css';

export default function Menu(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='menu' onClick={() => setClicked(!clicked)}>
      <BurgerMenu clicked={clicked} />
      {clicked && <SideNav />}
    </div>
  )
}
