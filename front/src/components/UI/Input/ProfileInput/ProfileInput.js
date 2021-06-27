import React from 'react';

import classes from './ProfileInput.css';

const profileInput = (props) => {
  let inputElement = null;

  switch ( props.elementType ) {
    case ('input'):
      inputElement = <input className={classes.inputElement} />
      break;
    default:
      inputElement= <input />
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default profileInput;