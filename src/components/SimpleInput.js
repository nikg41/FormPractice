import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [name, setName] = useState('');

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    console.log(name);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    setName('')
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          value={name}
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
