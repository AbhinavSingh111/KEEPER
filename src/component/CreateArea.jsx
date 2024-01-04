import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        setIsEmpty(false);
        return {
          ...note,
          title: value,
        };
      } else if (name === "content") {
        setIsEmpty(false);
        return {
          ...note,
          description: value,
        };
      }
    });
  };

  const handleClick = (e) => {
    if (note.title.trim().length > 0 && note.description.trim().length > 0) {
      props.onAdd(note);
      setNote({
        title: "",
        description: "",
      });
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }

    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.description}
        />
        <p style={isEmpty ? { display: "block" } : { display: "none" }}>
          Please take a note
        </p>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
