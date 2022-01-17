import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();
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

  const nameInputClass = isNameValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={name}
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameChangeHandler} />
        {!isNameValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
