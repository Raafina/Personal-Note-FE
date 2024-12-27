import React from 'react';
const NoteArchiveButton = ({ handleChangeStatusNote, id }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        handleChangeStatusNote(id);
      }}
    >
      Arsipkan
    </button>
  );
};

export default NoteArchiveButton;
