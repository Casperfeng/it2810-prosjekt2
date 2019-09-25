import React from 'react'
import './Tabs.css';

function Tabs(props) {
  return (
    <div className="tabs-container">
      <button className={`tab ${props.tabIndex === 0 ? 'active-tab' : ''}`} onClick={() => props.onTabIndexChanged(0)}>1</button>
      <button className={`tab ${props.tabIndex === 1 ? 'active-tab' : ''}`} onClick={() => props.onTabIndexChanged(1)}>2</button>
      <button className={`tab ${props.tabIndex === 2 ? 'active-tab' : ''}`} onClick={() => props.onTabIndexChanged(2)}>3</button>
      <button className={`tab ${props.tabIndex === 3 ? 'active-tab' : ''}`} onClick={() => props.onTabIndexChanged(3)}>4</button>
    </div>
  );
}

export default Tabs;