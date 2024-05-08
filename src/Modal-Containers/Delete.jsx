import React, { useState } from 'react';

function Delete({name, onConfirm}) {
  

  return (
    <div style={{ padding: '10px' }}>
      <p>Are you sure you want to delete "{name}"?</p>
    </div>
  );
}

export default Delete;