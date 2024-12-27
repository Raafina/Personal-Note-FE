import React from 'react';
const NoteArchiveButton = ({ handleChangeStatusNote, id }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        handleChangeStatusNote(id);
      }}
    >
      Pindahkan
    </button>
  );
};

export default NoteArchiveButton;
