import React, { useState, useImperativeHandle, forwardRef } from 'react';

const FormComponent = forwardRef(({ displayData }, ref) => {
  const [inputName, setInputName] = useState('');
  const [inputPlace, setInputPlace] = useState('');

  useImperativeHandle(ref, () => ({
    clearFields() {
    setInputName('');
    setInputPlace('');
    }
  }));

  const setInput = (e, setter) => {
    setter(e.target.value);
  };
  

  return (
    <div className='form-container'>
      <h2>Form</h2>
      <div>
        <label>Name: </label><input type="text" value={inputName} onChange={(e) => setInput(e, setInputName)} />
      </div>
      <div>
        <label>Place: </label><input type="text" value={inputPlace} onChange={(e) => setInput(e, setInputPlace)} />
      </div>
      <button onClick={()=>{displayData(inputName, inputPlace)}}>Display</button>
    </div>
  );
});

export default FormComponent;
