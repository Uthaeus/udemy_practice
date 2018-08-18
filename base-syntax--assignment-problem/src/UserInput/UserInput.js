import React from 'react';
import './UserInput.css';

const userinput = (props) => {

  return (
    <div className="UserInput">
      <h1>Enter input here</h1>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type="text" onChange={props.changePassword} value={props.password} />
    </div>
  )
};


export default userinput;

