import React from 'react'
import './Header.css';
import Menu from './Menu/Menu';

export default function Header(props) {
  return (
    <header className='header'>
      <h1 className='title title-long'>Seasonal Art</h1>
      <h1 className='title title-short'>S. Art</h1>
      <Menu 
      svgIndex={props.svgIndex}
      poemIndex={props.poemIndex}
      audioIndex={props.audioIndex}
      onSvgIndexChanged={props.onSvgIndexChanged}
      onPoemIndexChanged={props.onPoemIndexChanged}
      onAudioIndexChanged={props.onAudioIndexChanged}
      handleUndo = {props.handleUndo}
      handleRedo = {props.handleRedo}
      historyIndex = {props.historyIndex}
      historySize = {props.historySize}
      />
    </header>
  )
}
