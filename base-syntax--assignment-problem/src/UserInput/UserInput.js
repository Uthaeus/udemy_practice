import React from 'react';
import './UserInput.css';

const userinput = (props) => {

  return (
    <div className="UserInput">
      <h1>Enter input here</h1>
      <input type="text" onChange={props.changed} value={props.name} />
      <input type="text" onChange={props.changed} value={props.password} />
    </div>
  )
};


export default userinput;

