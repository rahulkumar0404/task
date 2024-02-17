import React, { useRef } from 'react';
import Input from './Input';
import { Button } from './Button';
import Modal from './Modal';
export default function NewProject({ onAddProject, onCancelProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modal = useRef();
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation ...
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-600 my-4 mx-2">
          Invalid Input
        </h2>
        <p className="text-stone-500 my-4 text-base mx-2">
          Oops.. Looks Like u have forgot some fields to Enter
        </p>
        <p className="text-stone-400 mb-4 text-base mx-2">
          Please make sure you have entered all the values which are Present.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelProject}
            >
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" isTextarea={false} ref={titleRef} />
          <Input label="Description" isTextarea={true} ref={descriptionRef} />
          <Input
            type="date"
            label="Due Date"
            isTextarea={false}
            ref={dueDateRef}
          />
        </div>
      </div>
    </>
  );
}
