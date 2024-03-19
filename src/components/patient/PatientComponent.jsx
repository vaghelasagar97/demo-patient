import React, { useRef, useState } from 'react';
import FormComponent from '../common/FormComponent';

const PatientComponent = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  let formRef = useRef(null);

  const clearFields = () => {
    formRef.current.clearFields()
    setName('');
    setPlace('');
  };

  const displayData = (name, place) => {
    setName(name);
    setPlace(place);
  };

  return (
    <div className='patient-container'>
      <h2>Patient Details</h2>
      <div>
        <label>Name: </label><span>{name}</span>
      </div>
      <div>
        <label>Place: </label><span>{place}</span>
      </div>
      <button onClick={clearFields}>Clear</button>
      <FormComponent displayData={displayData}  ref={formRef}/>
    </div>
  );
};

export default PatientComponent;
