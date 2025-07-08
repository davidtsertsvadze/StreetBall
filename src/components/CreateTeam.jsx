import React, { useState } from 'react';

export default function CreateTeamPopup({ onClose }) {
  const isLoggedIn = !!localStorage.getItem('token');

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [members, setMembers] = useState('');
  const [logo, setLogo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);


    const membersArray = members
      .split(',')
      .map((m) => parseInt(m.trim()))
      .filter((m) => !isNaN(m));

    const body = {
      name,
      location,
      members: membersArray,
      logo,
    };

    try {
      const response = await fetch('https://peikrapeikra.pythonanywhere.com/api/team/teams/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Team created successfully!');
        onClose();
      } else {
        alert(data.message || 'Failed to create team');
      }
    } catch (error) {
      console.error('Create team error:', error);
       alert('Error occurred: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div onClick={onClose} className="fixed inset-0 bg-gradient-to-b z-1000 from-[#032EEF] to-[#010157] flex flex-col items-center justify-center gap-6 p-6">
      <div onClick={(e) => e.stopPropagation()} className="h-auto flex flex-col justify-between gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl text-center w-full max-w-sm">
        {isLoggedIn ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Create Team</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Team Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="p-2 rounded text-white outline-none border-white border-1"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="p-2 rounded text-white outline-none border-white border-1"
              />
              <input
                type="text"
                placeholder="Members (IDs comma separated)"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                className="p-2 rounded text-white outline-none border-white border-1"
              />
              <input
                type="text"
                placeholder="Logo URL"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
                className="p-2 rounded text-white outline-none border-white border-1"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
              >
                {loading ? 'Creating...' : 'Create Team'}
              </button>
            </form>
          </>
        ) : (
          <p className="text-center font-bold text-2xl text-white">
            To create team you need to have account
          </p>
        )}

        <button onClick={onClose} className="font-inter text-h6 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl p-2 cursor-pointer w-full mt-4">
          Close
        </button>
      </div>
    </div>
  );
}
