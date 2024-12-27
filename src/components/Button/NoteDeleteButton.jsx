import React from 'react';

const NoteDeleteButton = ({ handleDeleteNote, id }) => {
  return (
    <button
      className="note-item__delete-button"
      onClick={() => {
        handleDeleteNote(id);
      }}
    >
      Delete
    </button>
  );
};

export default NoteDeleteButton;
