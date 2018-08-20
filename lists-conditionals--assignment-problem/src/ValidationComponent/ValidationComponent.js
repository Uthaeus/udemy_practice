import React from 'react';
import './ValidationComponent.css';


const validationComponent = (props) => {
  let message = 'Text long enough';
  if (props.userInLength <= 5) {
    message = 'Text too short';
  }

  return (
    <div className="ValidationComp">
      <p>{message}</p>
    </div>
  )
}


export default validationComponent;