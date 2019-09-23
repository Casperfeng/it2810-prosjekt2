import React from 'react'
import './Container.css';
import Tabs from './Tabs/Tabs.js'

function Container(props) {
  return (
    <div className='pane'>
      <Tabs onTabIndexChanged = {props.onTabIndexChanged} />
      <div className='hBox'>
        <svg id="svg" width = "100" height = "100"
        dangerouslySetInnerHTML = {{ __html: props.svg}}/>
        <div className = 'vBox'>
          <p className = 'text'>{props.poem}</p>
          <audio controls src = {props.audio} type = "audio/mpeg"/>
        </div>
      </div>
    </div>
  );
}

export default Container;