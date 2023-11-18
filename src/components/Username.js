import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Username = (props) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setUser(inputValue);
    navigate('/account');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">GitHub Username</label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            placeholder='Enter your github username'
            value={inputValue}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

  );
};

export default Username;
