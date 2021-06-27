import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { IoArrowForwardOutline} from "react-icons/io5";

import classes from './SignUp.css'
import Input from '../../../components/UI/Input/AuthInput/AuthInput';
import axios from '../../../axios-orders';
import { updateObject } from '../../../shared/utility';

function SignUp() {

  
  return (
    <div className={classes.Container}>
      <div className={classes.SignUpContainer}>
        <h4 className={classes.Title}>SignUp</h4>
        {form}
        <div>
          <p>Already SingnUp? <Link to='/' className={classes.NextLink}>SignIn</Link></p>
        </div>
      </div>
    </div>
  );
}


export default SignUp;