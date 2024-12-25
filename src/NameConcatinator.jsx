import React, { useState } from 'react';

function NameConcatenator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (firstName !== '' && lastName !== '') {
      setFullName(`${firstName} ${lastName}`);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: 'grey',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
      {fullName && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Full Name:</strong> {fullName}
        </p>
      )}
    </div>
  );
}

export default NameConcatenator;
