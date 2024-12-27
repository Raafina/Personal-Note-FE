import React from 'react';
import { getInitialData } from '../utils';
import SearchNote from './SearchNote';
import NoteInput from './NoteInput';
import NoteList from './NoteList';
import NoteListArchive from './NoteListArchive';
class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    // initial state
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };

    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleChangeStatusNote = this.handleChangeStatusNote.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.setSearch = this.setSearch.bind(this);
  }

  handleAddNote({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  handleDeleteNote(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  handleChangeStatusNote(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        };
      }
      return note;
    });
    this.setState({ notes });
  }

  setSearch(e) {
    this.setState(() => {
      return {
        searchQuery: e.target.value,
      };
    });
  }

  render() {
    const { notes, searchQuery } = this.state;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div>
            <SearchNote
              onSearchChange={this.setSearch}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        <div className="note-app__body">
          <h2>Tambah Catatan Aktif</h2>
          <NoteInput addNote={this.handleAddNote} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={activeNotes}
            handleDeleteNote={this.handleDeleteNote}
            handleChangeStatusNote={this.handleChangeStatusNote}
          />
          <h2>Arsip</h2>
          <NoteListArchive
            notes={archivedNotes}
            handleDeleteNote={this.handleDeleteNote}
            handleChangeStatusNote={this.handleChangeStatusNote}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
