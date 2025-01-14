import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token if your backend provides one
        localStorage.setItem('token', data.token);
        localStorage.setItem('isAuthenticated', 'true');
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-6 py-12 bg-white shadow-lg sm:rounded-3xl sm:p-24">

          <div className="max-w-2xl mx-auto">
            <div>
              <h1 className="text-3xl font-semibold">Login</h1>
            </div>
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-10 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input 
                    value={credentials.email}
                    onChange={handleChange}
                    autoComplete="off" 
                    id="email" 
                    name="email" 
                    type="text" 
                    className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 text-3xl focus:outline-none focus:borer-rose-600" 
                    placeholder="Email address" 
                  />
                  <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Email Address</label>
                </div>
                <div className="relative">
                  <input 
                    value={credentials.password}
                    onChange={handleChange}
                    autoComplete="off" 
                    id="password" 
                    name="password" 
                    type="password" 
                    className="peer placeholder-transparent h-12 w-full border-b-2 border-gray-300 text-gray-900 text-3xl focus:outline-none focus:borer-rose-600" 
                    placeholder="Password" 
                  />
                  <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-3 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-base">Password</label>
                </div>
                <div className="relative">
                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}
                  <button type="submit" className="bg-cyan-500 text-white rounded-md px-6 py-3 text-lg">
                    LOGIN
                  </button>
                </div>
              </div>
            </form>
          </div>

       

        </div>
      </div>
    </div>
  );
};

export default Admin;
