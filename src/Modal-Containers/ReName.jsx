import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

function ReName({ onConfirm }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div style={{ padding: '10px' }}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onConfirm(name, description);
      }}>
        <div style={{ marginBottom: '10px', backgroundColor:"lightgray" }}>
          <TextField fullWidth id="outlined-basic" label="Name" type="text" value={name} variant="outlined" onChange={handleNameChange} />
        </div>
        <div style={{ marginBottom: '10px', backgroundColor:"lightgray" }}>
        <TextField
        fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
        />
        </div>
      </form>
    </div>
  );
}

export default ReName;
