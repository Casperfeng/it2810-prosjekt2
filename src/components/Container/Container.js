import React from 'react'
import './Container.css';
import Tabs from './Tabs/Tabs.js'

function Container(props) {
  return (
    <div>
      <Tabs onTabIndexChanged={props.onTabIndexChanged} />
      <div className='container'>
        <svg id="svg" viewBox="0 0 100 100" dangerouslySetInnerHTML={{ __html: props.svg}}/>
        <div className='poem-container'>
          <p className='poem'>{props.poem}</p>
        </div>
        <audio className='audio' controls src={props.audio} type="audio/mpeg"/>
      </div>
    </div>
  );
}

export default Container;