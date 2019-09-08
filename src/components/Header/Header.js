import React from 'react'
import './Header.css';

import Menu from './Menu/Menu';


export default function Header() {
  return (
    <header className='header'>
      <h1 className='title'>HEI FRA HEADER</h1>
      <Menu />
    </header>
  )
}
