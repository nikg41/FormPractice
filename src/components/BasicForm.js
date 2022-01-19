import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const BasicForm = (props) => {

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);


  let formValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formValid = true;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (!formValid) {
      return
    }

    console.log(name, lastName, email);
    resetName();
    resetLastName();
    resetEmail();

  }


  const nameInputClass = nameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClass = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmit}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input
            value={name}
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler} />
          {nameHasError && <p className='error-text'>First Name must not be empty</p>}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            value={lastName}
            type='text'
            id='lastName'
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
          {lastNameHasError && <p className='error-text'>Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          value={email}
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
