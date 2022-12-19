import React from "react";

export default function Sidebar(props) {
  // note.body
  // const bodyText = JSON.stringify(note[0].body)
  // const result = JSON.stringify(note[0].body).split(/\r?\n/);
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        {/* split the note on the first newline break char and display in h4 note title */}
        <h4 className="text-snippet">{note.body.split(/\r?\n/)[0]}</h4>
        {/* take the event and pass it to my delete note function !use arrow function to pass arguments!*/}
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
