import React from 'react'
import './SideNav.css';

export default function SideNav(props) {
  return (
    <div className='sidenav'>

      <div className='menu-item'>Bilder</div>
      <p className='menu-option' onClick={() => props.onSvgIndexChanged(0)}>Høst</p>
      <p className='menu-option' onClick={() => props.onSvgIndexChanged(1)} > Sommer</p>
      <p className='menu-option' onClick={() => props.onSvgIndexChanged(2)} > Vinter</p>
      <div className='menu-item'>Lyd</div>
      <p className='menu-option' onClick={() => props.onAudioIndexChanged(0)} >Japansk</p>
      <p className='menu-option' onClick={() => props.onAudioIndexChanged(1)}>Latter</p>
      <p className='menu-option' onClick={() => props.onAudioIndexChanged(2)}>Musikk</p>
      <div className='menu-item'>Tekst</div>
      <p className='menu-option' onClick={() => props.onPoemIndexChanged(0)} >Katt</p>
      <p className='menu-option' onClick={() => props.onPoemIndexChanged(1)}>Hund</p>
      <p className='menu-option' onClick={() => props.onPoemIndexChanged(2)}>Kjærlighet</p>
    </div>
  )
}
