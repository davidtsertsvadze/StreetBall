import React, { useState } from 'react';

export default function CreateAccountPopup({ onClose, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

   const handleRegister = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const registerResponse = await fetch('https://peikrapeikra.pythonanywhere.com/api/user/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    if (!registerResponse.ok) {
      const errorData = await registerResponse.json();
      alert(errorData.message || 'Registration failed');
      return;
    }

    // Login immediately
    const loginResponse = await fetch('https://peikrapeikra.pythonanywhere.com/api/user/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const loginData = await loginResponse.json();

    if (loginResponse.ok && loginData.access) {
      localStorage.setItem('token', loginData.access);
      setIsLoggedIn(true); // Refresh Header
      alert('Account created & logged in!');
      onClose();
    } else {
      alert(loginData.message || 'Login failed after registration');
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
        <h1 className="text-white text-3xl font-bold">Create Account</h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-2 rounded text-white outline-none border-white border-1"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            className="font-bold text-[#010157] border-2 border-white bg-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>

        <div className="flex flex-col items-center justify-between gap-2.5 mt-4">
          <button className="font-inter text-h6 text-white font-bold border-2 border-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer w-full">
            Continue with Google
          </button>
          <button className="font-inter text-h6 text-white font-bold border-2 border-white hover:bg-black hover:text-white hover:border-black duration-300 rounded-xl p-2 cursor-pointer w-full">
            Continue with Facebook
          </button>
          <p className="text-white">Already have an account? (Add login later)</p>
        </div>

        <button
          onClick={onClose}
          className="font-inter text-h6 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl p-2 cursor-pointer w-32 mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
}
