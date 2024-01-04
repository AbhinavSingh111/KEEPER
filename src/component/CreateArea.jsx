import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const [isEmpty, setIsEmpty] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
        setIsEmpty(false);
        return {
          ...prevValue,
          [name]: value,
        };
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

  const expand = ()=>{
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        <textarea
          name="description"
          placeholder="Take a note..."
          onClick={expand}
          rows={isExpanded?3:1}
          onChange={handleChange}
          value={note.description}
        />
        <p style={isEmpty ? { display: "block" } : { display: "none" }}>
          Please take a note
        </p>
        <Zoom in={isExpanded}><Fab onClick={handleClick}><AddIcon /></Fab></Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
