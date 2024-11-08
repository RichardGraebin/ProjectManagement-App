import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onClose, onAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const inputTitle = title.current.value;
    const inputDesc = description.current.value;
    const inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDesc.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: inputTitle,
      description: inputDesc,
      dueDate: inputDueDate,
    });

    onClose();
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mt-4">
          Ops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mt-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-2/3 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onClose}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Name" />
          <Input ref={description} label="Description" isTextArea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
