import React, { useState } from 'react';

const Chatbot = () => {
  const [department, setDepartment] = useState('marketing');
  const [message, setMessage] = useState('');

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
    setMessage(''); // Clear the message when department changes
  };

  return (
    <div>
      <h2>AI Chatbot</h2>
      <label>
        Department:
        <select value={department} onChange={handleDepartmentChange}>
          <option value="marketing">Marketing</option>
          <option value="sales">Sales</option>
        </select>
      </label>
      <br />
      <label>
        Enter your {department === 'sales' ? 'sales' : 'marketing'} query here:
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
    </div>
  );
};

export default Chatbot;
