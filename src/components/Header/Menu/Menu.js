import React, { useState } from 'react'
import HistoryMenu from './HistoryMenu/HistoryMenu';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import SideNav from './SideNav/SideNav';
import './Menu.css';

export default function Menu(props) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className='menu'>
        <HistoryMenu 
        handleUndo = {props.handleUndo}
        handleRedo = {props.handleRedo}
        historyIndex = {props.historyIndex}
        historySize = {props.historySize}
        />
        <div className="burgerMenuContainer" onClick={() => setClicked(!clicked)}>
          <BurgerMenu clicked={clicked} />
        </div>
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
