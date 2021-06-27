import React from 'react';
import classes from './SaveBtn.css'

const saveBtn = (props) => {
  return (
    <div className={classes.BtnContainer}>
      <button className={classes.Btn}>{props.children} </button>
    </div>
  );
};

export default saveBtn;
