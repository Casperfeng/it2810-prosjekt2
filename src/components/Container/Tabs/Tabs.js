import React from 'react'
import './Tabs.css';

function Tabs(props) {
  return (
    <div>
      <button onClick={() => props.onTabIndexChanged(0)}>1</button>
      <button onClick={() => props.onTabIndexChanged(1)}>2</button>
      <button onClick={() => props.onTabIndexChanged(2)}>3</button>
      <button onClick={() => props.onTabIndexChanged(3)}>4</button>
    </div>
  );
}

export default Tabs;