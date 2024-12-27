import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    //initate state
    this.state = {
      title: '',
      body: '',
    };

    this.setTitle = this.setTitle.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
  }

  setTitle(e) {
    this.setState(() => {
      return {
        title: e.target.value,
      };
    });
  }

  setBody(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  handleAddNote(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <>
        <form className="note-input" onSubmit={this.handleAddNote}>
          <p className="note-item__title__counter">
            Sisa Karakter : {50 - this.state.title.length}
          </p>
          <input
            className="note-input_title"
            type="text"
            maxLength={50}
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.setTitle}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu disini ..."
            value={this.state.body}
            onChange={this.setBody}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </>
    );
  }
}

export default NoteInput;
