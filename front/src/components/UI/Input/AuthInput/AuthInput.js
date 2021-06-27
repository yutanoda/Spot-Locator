import React from 'react';
import classes from './AuthInput.css';
import Aux from '../../../../hoc/Aux/Aux';

const authInput = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input 
        className={classes.Input} 
        value={props.value}
        onChange={props.changed}
        {...props.elementConfig} />;
      break;

    default:
      inputElement = <input  />
  }

  return (
    <Aux>
      <label className={classes.Label}>{props.label}</label>
      <div className={classes.FormContainer}>
        {inputElement}
      </div>
    </Aux>
  )
}

export default authInput;