import React, { useState } from 'react';

function NameConcatenator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = () => {
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Full Name Concatenator</h1>
      <div style={{ marginBottom: '10px' }}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginLeft: '10px', marginBottom: '10px', padding: '5px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ marginLeft: '10px', marginBottom: '10px', padding: '5px' }}
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          padding: '8px 15px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
      {fullName && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Full Name:</strong> {fullName}
        </p>
      )}
    </div>
  );
}

export default NameConcatenator;
