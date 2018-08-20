import React from 'react';
import './CharComponent.css';

const chars = (props) => {
  return (
    <div className="CharComp">
      <p onClick={props.click}>{props.char}</p>
    </div>
  )
}


export default chars;