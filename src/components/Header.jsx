import React, { useState, useEffect } from 'react';
import siteLogo from '../assets/Logo.svg';
import CreateAccountPopup from '../components/CreateAcount.jsx';
import LoginPopup from '../components/LogIn.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check token
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <header className="w-full bg-[#0000004A] py-6">
      <div className="max-w-[1360px] px-10 w-full flex items-center justify-between mx-auto relative">
        <div>
          <a href="#home"><img className="aspect-[250/65] lg:w-[250px] w-[150px]" src={siteLogo} alt="Site Logo" /></a>
        </div>

        <ul className="md:flex hidden items-center justify-between gap-[20px]">
          <li className="font-inter lg:text-h5 text-h6 text-white font-bold capitalize"><a href="#home">home</a></li>
          <li className="font-inter lg:text-h5 text-h6 text-white font-bold capitalize"><a href="#howitworks">how it works</a></li>

          {!isLoggedIn && (
            <>
              <button onClick={() => setIsPopupOpen(true)} className="font-inter lg:text-h5 text-h6 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl p-2 cursor-pointer capitalize">create account</button>
              <button onClick={() => setShowLoginPopup(true)} className="font-inter text-h5 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-xl p-2 cursor-pointer capitalize">Log in</button>
            </>
          )}

          {isLoggedIn && (
            <button onClick={handleLogout} className="font-inter text-h5 text-white font-bold border-2 border-white hover:bg-red-600 hover:border-red-600 duration-300 rounded-xl p-2 cursor-pointer capitalize">Log out</button>
          )}
        </ul>

        {/* popups */}
        {isPopupOpen && (
          <CreateAccountPopup
            onClose={() => setIsPopupOpen(false)}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        {showLoginPopup && (
          <LoginPopup
            onClose={() => setShowLoginPopup(false)}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}

        <button onClick={() => setIsOpen(!isOpen)} className="space-y-1 md:hidden cursor-pointer">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-gradient-to-b from-[#00024C] via-[#000239] to-[#00011F] pb-10 mt-[-24px] w-screen absolute top-0 right-0 flex flex-col space-y-1 z-50">
            <button onClick={() => setIsOpen(false)} className="px-16 py-6 relative ml-auto cursor-pointer">
              <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
              <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
            </button>
            <li className="flex justify-center w-full py-2 hover:bg-[#00011F]"><a href="#home" className="font-inter text-white font-bold capitalize">home</a></li>
            <li className="flex justify-center w-full py-2 hover:bg-[#00011F]"><a href="#howitworks" className="font-inter text-white font-bold capitalize">how it works</a></li>
            <div className="flex flex-col justify-center items-center w-full py-2 gap-5">
              {!isLoggedIn && (
                <>
                  <button onClick={() => setIsPopupOpen(true)} className="font-inter w-50 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-full p-2 cursor-pointer capitalize">create account</button>
                  <button onClick={() => setShowLoginPopup(true)} className="font-inter w-50 text-white font-bold border-2 border-white hover:bg-white hover:text-black duration-300 rounded-full p-2 cursor-pointer capitalize">Log in</button>
                </>
              )}

              {isLoggedIn && (
                <button onClick={handleLogout} className="font-inter w-50 text-white font-bold border-2 border-white hover:bg-red-600 duration-300 rounded-full p-2 cursor-pointer capitalize">log out</button>
              )}
            </div>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
