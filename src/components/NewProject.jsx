import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onClose, onAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    onAddProject({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });

    onClose();
  }

  return (
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
  );
}
