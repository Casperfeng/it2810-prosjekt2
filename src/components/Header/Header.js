import React from 'react'
import './Header.css';

import Menu from './Menu/Menu';


export default function Header(props) {
  return (
    <header className='header'>
      <h1 className='title'>Dynamisk kunst</h1>
      <Menu
        svgIndex={props.svgIndex}
        poemIndex={props.poemIndex}
        audioIndex={props.audioIndex}
        onSvgIndexChanged={props.onSvgIndexChanged}
        onPoemIndexChanged={props.onPoemIndexChanged}
        onAudioIndexChanged={props.onAudioIndexChanged}
      />
    </header>
  )
}
