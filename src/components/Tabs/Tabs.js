import React from 'react'
import './Tabs.css';
import  Container from './Container/Container.js'

function Tabs(props) {
  return (
    <div>
      <button onClick={() => props.onTabIndexChanged(0)}>1</button>
      <button onClick={() => props.onTabIndexChanged(1)}>2</button>
      <button onClick={() => props.onTabIndexChanged(2)}>3</button>
      <button onClick={() => props.onTabIndexChanged(3)}>4</button>
      <Container      
      svg = {props.svg} 
      poem = {props.poem} 
      audio = {props.audio}
      svgIndex = {props.svgIndex}
      poemIndex = {props.poemIndex}
      audioIndex = {props.audioIndex}
      />
    </div>
  );
}

export default Tabs;