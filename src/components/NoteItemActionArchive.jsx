import React from 'react';
import NoteDeleteButton from './Button/NoteDeleteButton';
import NoteMoveButton from './Button/NoteMoveButton';
const NoteItemAction = ({ handleDeleteNote, handleChangeStatusNote, id }) => {
  return (
    <div className="note-item__action">
      <NoteDeleteButton handleDeleteNote={handleDeleteNote} id={id} />
      <NoteMoveButton handleChangeStatusNote={handleChangeStatusNote} id={id} />
    </div>
  );
};

export default NoteItemAction;
