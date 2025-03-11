// Modal.js

import React, { useState } from 'react';
import './Modal.css';

function Modal({ task, onSave, onClose }) {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, text: e.target.value });
  };

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editedTask.text}
          onChange={handleChange}
          placeholder="Edit task"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
