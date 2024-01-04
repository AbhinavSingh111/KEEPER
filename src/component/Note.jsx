import React from "react";

const Note = (props) => {
  const handleDelete = () => {
    return props.deleteNote(props.id);
  };
  return (
    <div className="note">
      <h1>{props.details.title}</h1>
      <p>{props.details.description}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Note;
