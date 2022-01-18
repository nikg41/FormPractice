import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [isNameTouched, setIsNameTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isNameValid = name.trim() !== '';
  const isNameInvalid = !isNameValid && isNameTouched;

  const isEmailValid = email.includes('@');
  const isEmailInvalid = !isEmailValid && isEmailTouched;

  let formValid = false;

  if (isNameValid && isEmailValid) {
    formValid = true;
  }

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };


  const nameBlurHandler = (event) => {
    setIsNameTouched(true);
  };

  const emailBlurHandler = (event) => {
    setIsEmailTouched(true);
  };


  const onSubmitHandler = event => {
    event.preventDefault();
    setIsNameTouched(true);

    if (!isNameValid) {
      return;
    }
    console.log(name);
    setName('');
    setIsNameTouched(false);

    setEmail('');
    setIsEmailTouched(false);
  };


  const nameInputClass = isNameInvalid ? 'form-control invalid' : 'form-control';

  const emailInputClass = isEmailInvalid ? 'form-control invalid' : 'form-control';

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
        {isNameInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          value={email}
          type='email'
          id='email'
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler} />
        {isEmailInvalid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
