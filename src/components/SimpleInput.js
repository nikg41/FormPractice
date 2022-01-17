import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [isNameTouched, setIsNameTouched] = useState(false);

  const isNameValid = name.trim() !== '';
  const isNameInvalid = !isNameValid && isNameTouched;
  let formValid = false;

  if (isNameValid) {
    formValid = true;
  }

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    setIsNameTouched(true);
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
  };


  const nameInputClass = isNameInvalid ? 'form-control invalid' : 'form-control';

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
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
