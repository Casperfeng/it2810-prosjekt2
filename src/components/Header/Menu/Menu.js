import React, { useState } from 'react'
import BurgerMenu from './BurgerMenu/BurgerMenu';
import SideNav from './SideNav/SideNav';
import './Menu.css';

export default function Menu(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className='menu' onClick={() => setClicked(!clicked)}>
        <BurgerMenu clicked={clicked} />
      </div>
      {
        clicked && <SideNav
          svgIndex={props.svgIndex}
          poemIndex={props.poemIndex}
          audioIndex={props.audioIndex}
          onSvgIndexChanged={props.onSvgIndexChanged}
          onPoemIndexChanged={props.onPoemIndexChanged}
          onAudioIndexChanged={props.onAudioIndexChanged} />
      }
    </>
  )
}
