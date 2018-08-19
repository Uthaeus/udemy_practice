import React from 'react';
import './ValidationComponent.css';


const validationComponent = (props) => {
  if (props.userInLength > 5) {
    return (
      <div className="ValidationComp">
        <p>'Text is long enough'</p>
      </div>
    )
  } else {
    return (
      <div className="ValidationComp">
        <p>'Text too short'</p>
      </div>
    )
  }
}


export default validationComponent;