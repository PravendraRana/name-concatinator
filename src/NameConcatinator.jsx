import React, { useState } from 'react';

function NameConcatenator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = () => {
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h1>Full Name Display</h1>
      <div>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
      </div>
      <div >
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: 'grey',
          border: 'none',
          borderRadius: '2px',
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
