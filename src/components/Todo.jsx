import React, { useState } from 'react';

export const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoElement, setTodoElement] = useState([]);
  function handleChange(event) {
    setInputValue(event.target.value.trim());
  }

  function handleClick(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setTodoElement((prevValue) => {
        return [inputValue.trim(), ...prevValue];
      });
      setInputValue('');
    }
  }

  function handleButtonClick(index) {
    setTodoElement((prevValue) => {
      console.log(index);
      return prevValue.filter((_, i) => i !== index);
    });
  }
  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          onKeyUp={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todoElement.map((todo, index) => (
          <li key={index}>
            <button onClick={() => handleButtonClick(index)}>{todo}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
