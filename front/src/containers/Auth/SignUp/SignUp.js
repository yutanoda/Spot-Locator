import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { IoArrowForwardOutline} from "react-icons/io5";

import classes from './SignUp.css'
import Input from '../../../components/UI/Input/AuthInput/AuthInput';
import axios from '../../../axios-orders';
import { updateObject } from '../../../shared/utility';

class SignUp extends Component {

  state = {
    inputForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        show: true
      },
      code: {
        elementType: 'input',
        elementConfig: {
          type: 'code'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        show: false
      },
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        show: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        show: false
      }
    },
    formIsValid: false,
    error: false,
    userId: '',
    token: ''
  }

  signUpContinueHandler = (event) => {
    event.preventDefault();

    const formData = {};

    for (let formElementIdentifier in this.state.inputForm) {
      if (this.state.inputForm[formElementIdentifier].show) {
        formData[formElementIdentifier] = this.state.inputForm[formElementIdentifier].value
      }
    }

    formData['userId'] = this.state.userId;
    formData['token'] = this.state.token;

    const url = 'http://localhost:3000/api/v1/users/sign_up';

    axios.post(url, formData)
      .then( response => {
        if (response.data.id && response.data.token) {
          //name password
          const updatedNameFormElement = updateObject(this.state.inputForm['name'], {
            show: false
          });
          const updatedPasswordFormElement = updateObject(this.state.inputForm['password'], {
            show: false
          });

          const updatedInputForm = updateObject(this.state.inputForm, {
            name: updatedNameFormElement,
            password: updatedPasswordFormElement
          })

          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('token', response.data.token);
          
          this.setState({inputForm: updatedInputForm , token: response.data.token});

        } else if (response.data.code) {
          //code
          const updatedCodeFormElement = updateObject(this.state.inputForm['code'], {
            show: false
          });

          const updatedNameFormElement = updateObject(this.state.inputForm['name'], {
            show: true
          });
          const updatedPasswordFormElement = updateObject(this.state.inputForm['password'], {
            show: true
          });

          const updatedInputForm = updateObject(this.state.inputForm, {
            code: updatedCodeFormElement,
            name: updatedNameFormElement,
            password: updatedPasswordFormElement
          })
          
          this.setState({inputForm: updatedInputForm});

        } else if (response.data.id) {
          //email
          const updatedEmailFormElement = updateObject(this.state.inputForm['email'], {
            show: false
          });

          const updatedCodeFormElement = updateObject(this.state.inputForm['code'], {
            show: true
          });

          const updatedInputForm = updateObject(this.state.inputForm, {
            email: updatedEmailFormElement,
            code: updatedCodeFormElement
          })
          localStorage.setItem('userId', response.data.id);
          this.setState({inputForm: updatedInputForm, userId: response.data.id});
        } else if (response.data.token) {
          this.setState({token: response.data.token})
          alert('ページ遷移');
        } else {

        }
      })
      .catch( error => {
        console.log(error);
      });
  }


  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.inputForm[inputIdentifier], {
      value: event.target.value,
      valid: true,
      touched: true
    });
    const updatedInputForm = updateObject(this.state.inputForm, {
      [inputIdentifier]: updatedFormElement
    })

    let formIsValid = true;
    this.setState({inputForm: updatedInputForm, formIsValid: formIsValid});
  }

  render () {
    const formElementsArray = [];
    for (let key in this.state.inputForm) {

      if (this.state.inputForm[key].show) {
        formElementsArray.push({
          id: key,
          config: this.state.inputForm[key]
        })
      }
    }

    let form = (
      <form onSubmit={this.signUpContinueHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            label={formElement.id.charAt(0).toUpperCase() + formElement.id.slice(1)} 
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)} />

        ))}
        <div className={classes.ButtonContainer}>
            <button className={classes.Button}><span>Next</span><span><IoArrowForwardOutline /></span></button>
        </div>
      </form>
    )

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
}


export default SignUp;