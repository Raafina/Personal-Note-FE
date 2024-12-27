import React from 'react';
import { showFormattedDate } from '../utils';
import NoteItemActionArchive from './NoteItemActionArchive';
const NoteList = ({ notes, handleDeleteNote, handleChangeStatusNote }) => {
  return (
    <>
      {notes.length === 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}

      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-item " key={note.id}>
            <div className="note-item__content">
              <p className="note-item__title">{note.title}</p>
              <p className="note-item__date">
                {showFormattedDate(note.createdAt)}
              </p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <NoteItemActionArchive
              handleDeleteNote={handleDeleteNote}
              handleChangeStatusNote={handleChangeStatusNote}
              id={note.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
