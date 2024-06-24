// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Omar Rahman</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="./about" className="hover:underline">About</a></li>
            <li><a href="./portfolio" className="hover:underline">Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
