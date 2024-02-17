import React, { useState } from 'react';

export const NewTask = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');

  function handleChange(event) {
    setEnteredText(event.target.value);
  }

  function handleClick() {
    if (enteredText.trim() === '') return;
    onAdd(enteredText);
    setEnteredText('');
  }
  return (
    <div className="flex items-center gap-4">
      <input
        className="px-2 py-1 rounded-sm bg-stone-200 w-64"
        onChange={handleChange}
        value={enteredText}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};
