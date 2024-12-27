import React from 'react';
import NoteDeleteButton from './Button/NoteDeleteButton';
import NoteArchiveButton from './Button/NoteArchiveButton';
const NoteItemAction = ({ handleDeleteNote, handleChangeStatusNote, id }) => {
  return (
    <div className="note-item__action">
      <NoteDeleteButton handleDeleteNote={handleDeleteNote} id={id} />
      <NoteArchiveButton
        handleChangeStatusNote={handleChangeStatusNote}
        id={id}
      />
    </div>
  );
};

export default NoteItemAction;
