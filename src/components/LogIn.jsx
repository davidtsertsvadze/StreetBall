import React, { useState } from 'react';

export default function LoginPopup({ onClose, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('https://thingproxy.freeboard.io/fetch/https://peikrapeikra.pythonanywhere.com/api/user/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok && data.access) {
      localStorage.setItem('token', data.access);
      setIsLoggedIn(true); // Refresh Header
      onClose();
    } else {
      alert(data.message || 'Login failed');
    }
  } catch (error) {
    console.error(error);
    alert('Error occurred');
  } finally {
    setLoading(false);
  }
};


  return (
    <div onClick={onClose} className="fixed inset-0 bg-gradient-to-b z-1000 from-[#032EEF] to-[#010157] flex flex-col items-center justify-center gap-6 p-6">
      <div onClick={(e) => e.stopPropagation()} className="h-auto flex flex-col justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl text-center w-full max-w-sm">
        <h1 className="text-white text-3xl font-bold">Log In</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-3 w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 rounded text-white outline-none border-white border-1"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 rounded text-white outline-none border-white border-1"
          />
          <button
            type="submit"
            className="w-full font-bold text-[#010157] border-2 border-white bg-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <button
          onClick={onClose}
          className="w-32 font-inter text-h5 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl p-2 cursor-pointer mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}
