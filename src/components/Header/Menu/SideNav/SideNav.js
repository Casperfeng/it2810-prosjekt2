import React from 'react'
import './SideNav.css';

export default function SideNav(props) {
  return (
    <div className='sidenav'>
      <div className='category'>Image</div>
      <p className={`option ${props.svgIndex === 0 ? 'option-active' : ''}`} onClick={() => props.onSvgIndexChanged(0)}>Autumn</p>
      <p className={`option ${props.svgIndex === 1 ? 'option-active' : ''}`} onClick={() => props.onSvgIndexChanged(1)} >Summer</p>
      <p className={`option ${props.svgIndex === 2 ? 'option-active' : ''}`} onClick={() => props.onSvgIndexChanged(2)} >Winter</p>
      <div className='category'>Sound</div>
      <p className={`option ${props.audioIndex === 0 ? 'option-active' : ''}`} onClick={() => props.onAudioIndexChanged(0)} >Japanese</p>
      <p className={`option ${props.audioIndex === 1 ? 'option-active' : ''}`} onClick={() => props.onAudioIndexChanged(1)}>Laughter</p>
      <p className={`option ${props.audioIndex === 2 ? 'option-active' : ''}`} onClick={() => props.onAudioIndexChanged(2)}>Music</p>
      <div className='category'>Poem</div>
      <p className={`option ${props.poemIndex === 0 ? 'option-active' : ''}`} onClick={() => props.onPoemIndexChanged(0)} >Cat</p>
      <p className={`option ${props.poemIndex === 1 ? 'option-active' : ''}`} onClick={() => props.onPoemIndexChanged(1)}>Dog</p>
      <p className={`option ${props.poemIndex === 2 ? 'option-active' : ''}`} onClick={() => props.onPoemIndexChanged(2)}>Love</p>
      <div className="empty-box"></div>
    </div>
  )
}
