import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {

  return (
    <div className="UserOutput">
      <p>Welcome {props.name}!</p>
      <p>I wouldn't normally do this I suppose, but your password is {props.password}</p>
    </div>
  )
};


export default useroutput;