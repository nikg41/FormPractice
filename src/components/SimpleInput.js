import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '')

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'))


  let formValid = false;

  if (nameIsValid && emailIsValid) {
    formValid = true;
  }


  const onSubmitHandler = event => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }
    console.log(name);
    resetName();

    resetEmail();
  };


  const nameInputClass = nameHasError ? 'form-control invalid' : 'form-control';

  const emailInputClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={name}
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler} />
        {nameHasError && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          value={email}
          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler} />
        {emailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
