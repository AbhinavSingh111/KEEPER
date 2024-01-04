import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../utilities/notes";
import CreateArea from "./CreateArea";

const App = () => {
  const [note, setNote] = useState([]);

  function addNote(note) {
    setNote((prevValue) => {
      return [...prevValue, note];
    });
    console.log(note);
  }

  function onDelete(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((detail, index) => (
        <Note key={index} details={detail} deleteNote={onDelete} id={index} />
      ))}
      <Footer />
    </>
  );
};

export default App;
