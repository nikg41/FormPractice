import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setIsNameTouched(true);
    if (name.trim() === '') {
      setIsNameValid(false);
      return;
    }
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    setIsNameTouched(true);
    if (name.trim() === '') {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);
    console.log(name);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setName('')
  };
  const isNameInvalid = !isNameValid && isNameTouched;

  const nameInputClass = isNameInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={name}
          ref={nameInputRef}
          type='text'
          id='name'
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler} />
        {isNameInvalid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
