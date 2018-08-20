import React from 'react';
import './CharComponent.css';

const chars = (props) => {
  return (
    <div className="CharComp" onClick={props.clicked}>
      {props.character}
    </div>
  )
}


export default chars;