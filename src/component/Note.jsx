import React from "react";
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  const handleDelete = () => {
    return props.deleteNote(props.id);
  };
  return (
    <div className="note">
      <h1>{props.details.title}</h1>
      <p>{props.details.description}</p>
      <Fab onClick={handleDelete}><DeleteIcon /></Fab>
    </div>
  );
};

export default Note;
