import React, { useState, useEffect, useRef } from 'react';

import logo from './logo.svg';
import './App.css';


function App() {

  const [inputs, setInputs] = useState([
    {
      index: 0,
      value: ''
    },
    {
      index: 1,
      value: ''
    },
    {
      index: 2,
      value: ''
    },
    { index: 3,
      value: ''
    }
  ]);
  
  const onChange = (event) => {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    console.log('index: ', index);

    if(index === 3 && event.target.value.length > 4) {

      return;
    }

    if(event.target.value.length <= 4) {
      setInputs([...inputs.filter((inp) => {
        return inp.index !== index;
      }), { index: index, value: event.target.value } ]);
    }
    
    if(event.target.value.length >= 4 && index !== 3) {
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  return (
    <div className="container">
      Card Number: 
      <form>
        <input type='text' value={inputs.find(inp => inp.index === 0).value} onChange={onChange} />
        <input type='text' value={inputs.find(inp => inp.index === 1).value} onChange={onChange} />
        <input type='text' value={inputs.find(inp => inp.index === 2).value} onChange={onChange} />
        <input type='text' value={inputs.find(inp => inp.index === 3).value} onChange={onChange} />
      </form>
    </div>
  );
}

export default App;
